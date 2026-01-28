const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
    vendorName: {
        type: String,   
        required: true,
    },
    ownerName: {
        type: String,   
        required: true,
    },
    phone:{
        type: String,   
        required: true,
    },
    location: {
        street:{
            type: String,
        },
        city:{
            type: String,
        },
        pincode:{
            type: String,
        }
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    openingTime: {
        type: String,
        required: true,
    },
    closingTime: {
        type: String,
        required: true,
    },
    thumbnailImage:{
        type: String,
    },
    menu:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodItem',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Vendor', VendorSchema);