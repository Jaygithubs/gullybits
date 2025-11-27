const User=require("../models/User");

exports.registerUser= async (req,res) => {
     try{
        const newUser=new User(req.body);
        await newUser.save();
        res.status(200).json({message:"New user saved successfully"});
    }
    catch(error)
    {
        console.log(`You are getting error ${error}`);
    }
}

exports.loginUser = async (req,res) => {
    res.send("Want to login user");
}

exports.vendorRegister = async (req,res) => {
    res.send("Register vendor");
}

exports.deliveryBoyRegister = async (req,res) => {
    res.send("Register delivery boy");
}