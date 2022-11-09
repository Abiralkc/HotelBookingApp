import express from "express";
import dotenv from "dotenv"; 
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/auth.js"
import hotelsRoute from "./routes/auth.js"
import roomsRoute from "./routes/auth.js"

const app = express()
dotenv.config()

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb")
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected")
})

//middleware

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


app.get("/users",(req,res)=>{
    res.send("hello 1st request")
})

app.listen(8800,()=>{
    connect()
    console.log("Connected to backend")
})