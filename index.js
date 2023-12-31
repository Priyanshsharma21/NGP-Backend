import express from "express"
import * as dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
dotenv.config()

const app = express()

// morgan middleware
app.use(morgan("tiny"))

// Global middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true,}))
app.use(cors())

//routing middleware
app.use("/user", userRouter)

const {PORT, URL} = process.env


const startServer = async()=>{
    try {
        await mongoose.connect(URL);
        console.log("Connected To Database")
        app.listen(PORT,()=>console.log(`Running Up The Hill At ${PORT}km/hr`))
    } catch (error) {
        console.log(error)
    }
}
startServer()