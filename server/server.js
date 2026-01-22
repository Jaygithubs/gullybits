const express=require("express");
const app=express();
const PORT=5000;
const connectDB=require("./src/config/db");
connectDB();
app.use(express.json());

app.use('/api',require("./src/routes/authRoutes"));

app.get('/',(req,res) => { 
    res.send("Welcome to GullyBits");
})
app.listen(PORT,() => {
    console.log(`Server started running on PORT: ${PORT}`);
})