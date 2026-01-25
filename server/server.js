const dotenv=require('dotenv');
dotenv.config();
const express=require("express");
const app=express();
const connectDB=require("./src/config/db");
const cors = require('cors');
app.use(cors(
    {
        origin: process.env.ORIGIN,
    }
));
connectDB();
app.use(express.json());

app.use('/api', require('./src/routes/authRoutes'));

app.get('/',(req,res) => { 
    res.send("Welcome to GullyBits");
})

const PORT = process.env.PORT | 5000;
app.listen(PORT,() => {
    console.log(`Server started running on PORT: ${PORT}`);
})