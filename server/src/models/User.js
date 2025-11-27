const mongoose=require("mongoose");
const bcrypt=require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})

userSchema.pre('save', async function() {
    const user=this;
    if(!user.isModified('password')) return ;
    try
    {
        const salt=await bcrypt.genSalt(10);
        //hash password
        const hashedPassword=await bcrypt.hash(user.password,salt);
        user.password=hashedPassword;
    }
    catch(error)
    {
        return error;
    }
})
module.exports = mongoose.model('User',userSchema);