import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
 displayName:{
  type: String,
  required: tru[true, "Please enter name"]
 },
 username:{
  type: String,
  required:[true, "Please enter username"]
 },
 email:{
  type: String,
  required: [true, "Please enter email"]
 },
 img:{
  type: String,
 },
 hashedpassword:{
  type: String,
  required:[true, "Please enter password"]
 }
}, {timestamps: true}
);

export default mongoose.model("User", userSchema )