import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connection established");
})
.catch(err=>console.log(err.message))

const app = express();
app.use(express.json());

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode|| 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        message:message,
        statusCode:statusCode

    })
})
app.listen(3000, () => {
    console.log("Server listening on port 3000");
})
