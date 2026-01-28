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

// User routes
app.use('/api/users', require('./src/routes/userRoutes'));

// Vendor routes
app.use('/api/vendors', require('./src/routes/vendorRoutes'));

// Food Item routes
app.use('/api/food-items', require('./src/routes/foodRoutes'));

// Order routes
app.use('/api/orders', require('./src/routes/orderRoutes'));

// Delivery routes
app.use('/api/deliveries', require('./src/routes/deliveryRoutes'));


app.get('/',(req,res) => { 
    res.send("Welcome to GullyBits");
})

const PORT = process.env.PORT | 5000;
app.listen(PORT,() => {
    console.log(`Server started running on PORT: ${PORT}`);
})