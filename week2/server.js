//create http server
import exp from 'express'
const app=exp()
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'


function middleware(req,res,next){
    res.json({message:"this res is middleware"});
    console.log("middleware executed");
    next();
}
//set a port number
//use body body body parser middileware
app.use(exp.json())// extracting the request body
const port =3000
// assign port number to http server
app.use('/user-api',userApp)
app.use('/product-api',productApp)
app.listen(port,()=>console.log(`server listening po port ${port}...`))

