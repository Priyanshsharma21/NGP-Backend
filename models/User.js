import mongoose from 'mongoose'

const { Schema, model }= mongoose

const userSchema = new Schema({
    username : {
        type : String,
        required : [true, 'Please enter your full name'],
    },

    email : {
        type : String,
        required : [true, 'Please enter your email address'],
        unique : true,
    },

    password : {
        type: String,
        required : [true, 'Please enter your password'],
        minLength : [7,'Password length should be greater than 7 characters'],
        select : false,        
    },

    role : {
        type : String,
        default : "user"
    }
}, {timestamps: true})

const User = model("User", userSchema)
export default User