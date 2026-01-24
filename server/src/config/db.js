const mongoose = require('mongoose');
const MONGO_URI=process.env.LOCAL_MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);

        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
