import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();
const localdb = process.env.CONNECTION_STRING;
const connectDb = async()=>{
    await mongoose.connect(localdb)
    console.log("MongoDB Connected")
}
export default connectDb;
