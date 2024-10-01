import express from "express";
const app = express();
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017",{
    dbName:"practice",
}).then(() => 
    console.log("Database connected"))
    .catch((e) => console.log(e));


const messageSchema = new mongoose.Schema
({
    name:String,
    email:String,
});

const Messge = mongoose.model("Message",messageSchema); 

import path from "path";


app.use(express.static(path.join(path.resolve(),"public")));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
   res.render("index");
    })

app.get("/add",(req,res)=>{
    Messge.create({
        name:"amant",
        email:"abc@gmail.com"
    }).then(()=>{
        res.send("Nice");
    })
})



app.listen(5000,()=>{
    console.log("Server is Running");
});