import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser=asyncHandler(async (req,res)=>{
    try {
        // return res.status(200).json({message:"ok"})
        // steps to write a user controller

            // get user details from frontend
            // validation -not empty
            // check if user already exists: username,email
            // check for images and check for avatar
            // upload them to cloudinary
            // create user object - create entry in the database
            // remove the password and refresh token field from response
            // check for user creation
            // return response

            const {fullName, email, username,password}=req.body;

            if([fullName,email,username,password].some((val)=>val.trim()==="")){
                throw new ApiError(400,"All field are required");
            }

            const existedUser=await User.findOne({
                or:[username,email]
            })

            if(existedUser){
                throw new ApiError(409,"User Already exists");
            }

            

    } catch (error) {
        console.error(error);
        
    }
})

export {registerUser}