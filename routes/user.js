import express from "express";
import { signup,login, getAllUsers } from "../controllers/user.js";

const router= express.Router();


router.post('/signup', signup)
router.post('/login', login)
router.get('/getusers', getAllUsers)


export default router;

