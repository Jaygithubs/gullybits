const express=require('express');
const router=express.Router();
const { getUsers,registerUser,loginUser,verifyEmail,forgotPassword,resetPassword } = require('../controllers/authController');
const authMiddleware = require('../Middleware/authMiddleware');
const authorizeRoles = require("../Middleware/roleMiddleware");

router.get('/users', getUsers);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/verify-email', verifyEmail);

router.post('/forgot-password', forgotPassword);

router.post('/reset-password', resetPassword);

router.get('/authuser', authMiddleware , authorizeRoles('Provider') ,(req,res) => {
    res.send("Ye authorized route hai be");
})

module.exports=router;