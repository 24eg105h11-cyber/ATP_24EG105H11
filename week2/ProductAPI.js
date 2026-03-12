//Create mini express application
import exp from 'express'
export const productApp=exp.Router()

let Products=[]
/
   productApp.post('/Products',(req,res)=>{
    const newUser=req.body
    Products.push(newUser)
    res.json({message:"Product created"})
   }) 
   //Route to handle GET req of Client
   productApp.get('/Products',(req,res)=>{
    res.json({message:"All Products",payload:Products})
   })
   //Route to handle DELETE req of Client
   productApp.delete('/Products/:id',(req,res)=>{
    //get id from url
    //find index of user
    //delete user with index
    let idOfUrl=Number(req.params.id) //{id:"5"}==5
    let index=Products.findIndex(userObj=>userObj.id===idOfUrl.id)
    if(index===-1){
        return res.json({message:"Product not found"})
    }
    Products.splice(index,1)
    res.json({message:"Product removed"})
})
   //Route to handle PUT  req of Client
   productApp.put('/Products',(req,res)=>{
    //get modified user from client{}
    //get index of the existing user in users array
    //update user with index
    //send res
    let modifiedUser=req.body
    let index=Products.findIndex(userObj=>userObj.id===modifiedUser.id)
    if(index===-1){
        return res.json({message:"Product not found"})
    }
    Products.splice(index,1,modifiedUser)
    res.json({message:"Product updated"})
   })
   //Post request and the get request should send data to the apias the body of the request object
//get and delete do not support body of the request.So,that these two request can send data thrrough end point.
//test data(replace this data with db)
productApp.get('/Products/:id',(req,res)=>{
    let userss=Number(req.params.brand)
    let pro=filter(function(elemensts){
        if(brand==='MRF'){
            return res.json({message:"a user",payload:Products})
        }
    })
    if(brand===""){
        return res.json({message:"Product not found"})
    }
    
})
