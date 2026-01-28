const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeliveryBoySchema = new Schema({ 
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    vehicleNumber: {
        type: String,
        required: true,
    },
    currentLcation: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        }   
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    assignedOrders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('DeliveryBoy', DeliveryBoySchema);