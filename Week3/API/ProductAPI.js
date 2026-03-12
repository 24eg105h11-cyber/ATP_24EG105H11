import exp from 'express'
import { ProductModel } from '../ProductModel.js';
import { hash } from 'bcryptjs';
export const productApp=exp.Router()
//define rest api routes
//create new user 
productApp.post("/Products",async(req,res)=>{
    //get new user object from req
    const newProduct=req.body;
    //create new user document
    const newProductDocument=new ProductModel(newProduct)
    //save
   const result= await newProductDocument.save()
   console.log('result',result)
   //send req
    res.status(201).json({message:"Product is created"})//document is succesful then the status code is 201
});


productApp.get("/Products",async(req,res) => {
        let productList=await ProductModel.find();
        res.status(200).json({message:"product",payload:productList})//operation is success if status code is 201 and creation//400 -bad request client error and 401 is unautharised resource and 404 is not found  error //500s series tells about the server side problem.
    })
productApp.get("/Products/:id",async(req,res)=>{
    //read object id from request params
    const uid=req.params.id
    //find user by id
   const ProductObj= await ProductModel.findById(uid)
    //if user not found
    if(!ProductObj){
        return res.status(404).json({message:"user not found"})
    }
   //send res
    res.status(200).json({message:"product",payload:ProductObj})
})
//use findOne methode to read a document with to non object id fields.Use findById to read document with object id
productApp.put("/Products/:id",async(req,res)=>{
    //get modified user from req body
    const modifiedProduct=req.body;
    const uid=req.params.id;
    //find user by id and update
    const updatedProduct= await ProductModel.findByIdAndUpdate(uid,{$set:{...modifiedProduct}},{new:true,runValidators:true})
     res.status(200).json({message:"Product",payload:modifiedProduct})
})

productApp.delete("/Products/:id",async(req,res)=>{
    let uid=req.params.id;
    //find and delete by id
    let deletedProduct=await ProductModel.findByIdAndDelete(uid)
    //send res
    res.status(200).json({message:"Product Deleted"})
})