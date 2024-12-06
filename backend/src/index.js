import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './db.js';
import adminrouter from './routes/admin.js'
import cors from 'cors'


dotenv.config()
const app=express();
const PORT=process.env.PORT



app.use(cors());
app.use(express.json())


app.get("/",(req,res)=>{
    res.json({"message":"hiii"})

})

//routes

app.use("/admin",adminrouter);





app.listen(PORT||3000 ,()=>{
    connectDB();
   console.log(`Server running on port ${PORT}`);
})


