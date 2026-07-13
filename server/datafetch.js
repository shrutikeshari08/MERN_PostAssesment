import axios from 'axios';
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs/promises";
import { title } from 'process';
dotenv.config();
const port =3006;
const app=express();

let userdata = [];
let newdata=[];

async function FetchJsonData() {
  try {

    const response = await axios.get('https://dummyjson.com/products');
    
    userdata = response.data;
    
    console.log('Data successfully stored:', userdata);
  } 
  catch (err) {
    console.error('Error', err.message);
  }
}

FetchJsonData();
app.use(express.json()); //middleware
app.use(cors());
app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Welcome user"

    })
})
app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Welcome user"

    })
})
app.get("/products",(req,res)=>{
    try{
    res.status(200).json({message: "data received",userdata});
    }
    catch(err){
        console.error("Error",err.message);
    }
    
})
app.get("/products/:id",(req,res)=>{
    try{
        const id=req.params.id;
        const user=userdata.products.find((u)=>u.id==id);
        if(!user){
            return res.status(400).json({message:"user not found"})
        }
        res.status(200).json({message: "user received",user})
    }
   catch(err){
    console.error("Error",err.message);
   } 
})
app.get("/products/search?q=phone",(req,res)=>{
    try{
        const category=req.query.search || "";
        const user=userdata.products.find((u)=>u.category==category);
        if(!user){
            return res.status(400).json({message:"user not found"})
        }
        res.status(200).json({message: "user received",user})
    }
   catch(err){
    console.error("Error",err.message);
   } 
})
app.post("/cart/",(req,res)=>{
    try{
        const {title,decription,category,price}=req.body;
        newdata={
            id:userdata.length+1,
            title,
            description,
            category,
            price
        }
        userdata.push(newdata);
        res.status(201).json({message:"user successfully added",newdata})

    }
    catch(err){
        console.error("Error",err.message);
    }
})
app.get("/cart/",(req,res)=>{
    try{
    res.status(200).json({message: "data received",newdatadata});
    }
    catch(err){
        console.error("Error",err.message);
    }

})
app.delete("/cart/:id",(req,res)=>{
    try{
        const id=req.params.id;
        const index=newdata.products.findIndex((u)=>u.id==id);
        if(index==-1){
            return res.status(400).json({message:"user not found"})
        }
        newdata.splice(index,1);
        res.status(200).json({message: "user delete successfully"})
    }
   catch(err){
    console.error("Error",err.message);
   } 
})
app.put("/cart/:id",(req,res)=>{
    try{
        const id=req.params.id;
        const index=newdata.products.findIndex((u)=>u.id==id);
        if(index==-1){
            return res.status(400).json({message:"user not found"})
        }
        const {title,description,catgory,price}=req.body;
        newdata[index]={
            title,
            description,
            catgory,
            price
        }
        
        res.status(200).json({message: "user updated successfully"})
    }
   catch(err){
    console.error("Error",err.message);
   } 
})
app.delete("/cart/:id",(req,res)=>{
    try{
        const id=req.params.id;
        const index=newdata.products.findIndex((u)=>u.id==id);
        if(index==-1){
            return res.status(400).json({message:"user not found"})
        }
        newdata.splice(index,1);
        res.status(200).json({message: "user delete successfully"})
    }
   catch(err){
    console.error("Error",err.message);
   } 
})
app.delete("/cart/",(req,res)=>{
    try{
        
        
        newdata.splice(0);
        res.status(200).json({message: "user delete successfully"})
    }
   catch(err){
    console.error("Error",err.message);
   } 
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})