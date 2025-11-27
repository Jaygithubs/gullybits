const express=require("express");
const app=express();
const PORT=3000;
const connectDB=require("./src/config/db");
connectDB();
const bodyParser=require("body-parser");

app.use(bodyParser.json());
// Parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',require("./src/routes/authRoutes"));

app.get('/',(req,res) => {
    res.send("Welcome to GullyBits");
})
app.listen(PORT,() => {
    console.log(`Server started running on PORT: ${PORT}`);
})