import {Schema,model} from 'mongoose'
const productSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"ProductId is required"]
    },
    productName:{
        type:String,
        required:[true,"Product name is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        min:[10000,"Min amount is 10000"],
        max:[50000,"Max amount is 50000"]
    },
    brand:{
        type:String,
        required:[true,"Required..."]
    }
},{versionKey:false,timestamps:true}
);
export const ProductModel=model("product",productSchema)