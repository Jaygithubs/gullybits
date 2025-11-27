const express=require("express");
const router=express.Router();
const { registerUser,loginUser,vendorRegister,deliveryBoyRegister } = require("../controllers/authController");

router.post('/register', registerUser);

router.get('/login',loginUser);

router.get('/vendor/register',vendorRegister);

router.get('/delivery/register',deliveryBoyRegister);

module.exports=router;