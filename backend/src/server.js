//console.log("hello from server");


import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";

 const app = express();


const _dirname = path.resolve();

 app.get("/health",(req,res) => {
  res.status(200).json({msg:"success from health"})
 })

  app.get("/books",(req,res) => {
  res.status(200).json({msg:"this is book"})
 })

 // want to our project for deployment

 if (ENV.NODE_ENV === "production"){
  app.use(express.static(path.join(_dirname,"../frontend/dist")));

  app.get("/{*any}", (req,res) => {
    res.sendFile(path.join(_dirname,"../frontend","dist","index.html"));
  })
 }

 


const startServer = async () => {

  try{
    await connectDB();
    app.listen(ENV.PORT, ()=> console.log("server is running on port : ", ENV.PORT));
  }
  catch(error){
    console.error("Error starting the server ",error);
  }
}

startServer();