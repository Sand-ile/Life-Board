import mongoose from "mongoose";

const connectDB = async ()=> {
 try {
  await mongoose.connect(process.env.MONGO_URL)
  console.log("MONGODB is Connected");
  
 } catch (err) {
  console.log("MONGODB Connection Error", err);
  
 }
}

export default connectDB;