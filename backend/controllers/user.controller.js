import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken'


// register controller
export const registerUser = async (req, res)=> {
 const {username, displayName, email, password} = req.body;

 if(!username || !email || !password){
  return res.status(400).json({message: "All fields are required"})
 }

 const newHashedPassword = await bcrypt.hash(password, 10);

 const user = await User.create({
  username,
  displayName,
  email,
  hashedPassword: newHashedPassword,
 }).select('-hashedPassword');

 const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);

 res.cookie('token', token), {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  maxAge: 30 * 24 * 60 * 60 * 1000,
 };

 res.status(201).json(user)
};


// login controller
export const loginUser = async (req, res)=> {
 const {email, password} = req.body;

 if(!email || !password) {
  return res.status(400).json({message: "All fields are required"})
 }

 const user = await User.findOne({email})

 if(!user) {
  return res.status(401).json({message: "Invalid email or password"})
 }

 const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);

 if(!isPasswordCorrect){
  return res.status(401).json({message: "Invalid email or password"})
 }

 const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET)

 res.cookie('token', token,{
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 30 * 24 * 60 * 60 * 1000,
 })

 const {hashedPassword, ...detailsWithoutPassword} = user.toObject();

 res.status(200).json(detailsWithoutPassword)

}

// logout controller
export const logoutUser = async (req, res)=> {
 res.clearCookie('token');

 res.status(200).json({message: "Logout Successful"})

}


// get User controller
export const getUser = async (req, res)=> {

 const{ username} = req.params;

 const user = await User.findOne({username}).select('-hashedPassword')

 res.status(200).json(user)

}