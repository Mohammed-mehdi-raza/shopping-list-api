import mongoose from "mongoose";

const Schema=mongoose.Schema;

const products=new Schema({
    id:String,
    name:String,
    description:String,
    features:String,
    price:Number,
    category:String,
});

const product=mongoose.model('product',products);
export default product;