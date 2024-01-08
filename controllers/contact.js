import Contact from '../models/Contact.js'

export const getAllContacts = async(req,res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).json({message : "Success", contacts : contacts})
    } catch (error) {
        res.status(500).json({message : error.message, status : "fail"})
    }
}


export const createContact = async(req,res)=>{
    try {
        const contact = await Contact.create(req.body)

        res.status(200).json({message : "Contact Created", contact :contact})
    } catch (error) {
        res.status(500).json({message : error.message, status : "fail"})
    }
}