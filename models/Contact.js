import mongoose from 'mongoose'


const { Schema, model } = mongoose

const contactSchema = new Schema({
    name :  String,
    email : String,
    message : String,
})

const Contact = new model("Contact", contactSchema)

export default Contact