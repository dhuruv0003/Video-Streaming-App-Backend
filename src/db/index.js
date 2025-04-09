import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb= async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,{dbName:DB_NAME});
        
        console.log(`Connected to MongoDB DBHOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Mongodb error",error);
        process.exit(1);
    }
}

export default connectDb;