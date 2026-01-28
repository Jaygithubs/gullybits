const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    Image:{
        type: String,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    category: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('FoodItem', FoodItemSchema);