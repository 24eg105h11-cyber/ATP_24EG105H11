import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './API/UserAPI.js';
import cookieParser from 'cookie-parser';
import { productApp } from './API/ProductAPI.js';
const app=exp()
config 
//Add body parser
app.use(exp.json())

app.use(cookieParser())
const port=process.env.PORT || 4000
//Forward request to UserApp if path starts with /user-api
app.use("/user-api",userApp) 
app.use("/product-api",productApp)

//Connect to DB Server
async function connectDB(){
    try{
        await connect();
        console.log("DB Connection success")
        //Start server
        app.listen(3000,()=>console.log("Server listening on port 3000"))
    }catch(err){
        console.log("err in DB connection: ",err)
    }
}
connectDB();

// app.use((err,req,res,next)=>{ 
//     //validation error
//     if(err.name==="ValidationError"){
//         return res.status(400).json({message:"error occured",err})
//     }
//     //castError
//     if(err.name==="CastError"){
//         return res.status
//     }

// })



// a medium to communicate between client anad server.
//tcpip and http relationship 
//eventloop have no purpose when a synchronus.continuesly monitoring the elements and sending elements to stack.
//javaxscript engine cannot deal with asynchronus operations.
// what modules are present in package.json.........object document mapping(odm) mongoose.

//error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.name)
    console.log(err.callStack)
    console.log(err.message)
    if(err.name==='ValidationError'){
        return res.status(400).json({message:'error occured',error:"Client side error"})
    }
    //castError
    if(err.name==="CastError"){
        return res.status(400).json({message:'error occured',error:"Client side error"})
    }
    res.status(500).json({message:"error occured", error:"server side error"})
})