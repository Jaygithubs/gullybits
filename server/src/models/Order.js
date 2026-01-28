const mongoose = require('mongoose');
const { create } = require('./Vendor');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId:{
        type:String,
        required:true,
    },
    vendorId:{
        type:String,
        required:true,  
    },
    items: [{
        foodItemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodItem',
            required: true,
        },
        quantity: {
            type: Number,
            required: true, 
        },
        price:{
            type: Number,
            required: true,
        }
    }],
    orderTotal:{
        type: Number,
        required: true,
    },
    deliveryFee:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        enum: ['Placed', 'Accepted', 'Cooking', 'Picked', "Delivered", 'Cancelled'],
        default: 'Placed', 
        required: true,
    },
    paymentStatus:{
        type: String,
        enum: ['Pending', 'Paid', 'Refunded', 'Failed'],
        default: 'Pending', 
    },
    paymentMethod:{
        type: String,
        enum: ['COD','Online'],
        required: true,
    },
    deliveryBoyId:{
        type:String,
    },
    address:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Order', OrderSchema);