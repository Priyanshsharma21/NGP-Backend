import User from "../models/User.js";
import * as dotenv from "dotenv";
dotenv.config();


export const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).json({status : "success", data : users})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const signup = async(req,res)=>{
    try {
        const user =  await User.create(req.body)
        res.status(200).json({status : "success", data : user})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const login = async(req,res)=>{
    try {
        const {email, password} = req.body

        const user = await User.findOne({email : email}).select({password : 1, username : 1, email : 1, role : 1})

        if(!user){
            return res.status(404).json({message : "No user found, please signup first."})
        }

        if(user.password === password){
            res.status(200).json({status : "success", data : user})
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
