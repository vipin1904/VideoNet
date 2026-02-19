//console.log("hello from server");


import express from "express";
import { ENV } from "./lib/env.js";
import path from "path"
 const app = express();


const _dirname = path.resolve()

 app.get("/health",(req,res) => {
  res.status(200).json({msg:"sucess from  health"})
 })

  app.get("/books",(req,res) => {
  res.status(200).json({msg:"this is book"})
 })

 // want to our project for deployment

 if(ENV.nODE_ENV == "production"){
  app.use(express.static(path.join(_dirname,"../frontend/dist")));

  app.get("/{*any}", (req,res) => {
    res.sendFile(path.join(_dirname,"../frontend","dist","index.html"));
  })
 }

 app.listen(ENV.PORT, ()=> console.log("server is running on port : ", ENV.PORT));