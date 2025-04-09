// using try catch 

// const asyncHandler = (fun)=>async(req,res,next)=>{
//     try {
//         await fun(req,res,next);
//     } catch (error) {
//         res.status(error.code||500).json({
//             success:false,
//             message:error.message || "Internal Server Error",
//         })
//     }
// }


//using promises

const asyncHandler= (fun)=>(req,res,next)=>{
    Promise.resolve(fun(req,res,next)).catch((error)=>next(error)); // code is directly passed to next middleware
}

// const asyncHandler =(fun)=>{
    
// }

export default asyncHandler;