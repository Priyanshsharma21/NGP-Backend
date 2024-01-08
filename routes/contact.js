import express from 'express'
import { getAllContacts, createContact } from "../controllers/contact.js";

const router = express.Router()

router.get("/contact", getAllContacts)
router.post("/contact", createContact)

export default router