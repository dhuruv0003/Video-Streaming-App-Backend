import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDb= async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,{dbName:DB_NAME});
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Mongodb error",error);
        process.exit(1);
    }
}