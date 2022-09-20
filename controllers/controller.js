import user from "../models/user.js";
import fetch from 'node-fetch';
import {items} from '../data.js'
import product from "../models/products.js";

export const home=(req,res)=>{
    res.send("welcome !!");
};

export const login=async(req,res)=>{
    const data = req.body;

    try {
        const result =await user.findOne({username:data.username});
        if(result && result.password===data.password){
            res.status(201).json({user:result});
        }else{
            res.status(200).json({message:"user not found"});
        }
        
    } catch (error) {
        res.status(200).json({message:error});
    }
}

export const signUp=async(req,res)=>{
    const data=req.body;

    try {
        const result = await user.create({username:data.username,password:data.password});
        res.status(201).json({user:result});
    } catch (error) {
        res.status(200).json({message:error});
    }
}

export const data=async(req,res)=>{
    for(var item in items){
        new product(items[item])
          .save()
          .catch((err)=>{
            console.log(err.message);
          });
    }
    res.send("success");
}

export const getAllProduct=async(req,res)=>{
    const result=[];
    try{
        for await (const doc of product.find()) {
            result.push(doc);
        }
    }
    catch(error){
        console.log(error);
    }
    res.status(200).json({result:result});
}

export const filter=async(req,res)=>{
    const data=req.body;
    const result=[];
    var filter={}
    if(data.category!==""){
        filter={
            category:data.category,
            price:{$gt:data.minPrice,$lt:data.maxPrice}
        }
    }else{
        filter={
            price:{$gt:data.minPrice,$lt:data.maxPrice}
        }
    }
    try{
        for await (const doc of product.find(filter)) {
            result.push(doc);
        }
    }
    catch(error){
        console.log(error);
    }
    res.status(200).json({result:result});
}