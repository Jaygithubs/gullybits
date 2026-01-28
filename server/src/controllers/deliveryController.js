const DeliveryBoy = require('../models/DeliveryBoy');
const Order = require('../models/Order');

// Get available delivery
const getAvailableDeliveryBoys = async (req, res) => {
    try {
        const availableBoys = await DeliveryBoy.find({ isAvailable: true });
        res.status(200).json(availableBoys);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Assign order to delivery boy
const assignOrderToDeliveryBoy = async (req, res) => {
    const { orderId, deliveryBoyId } = req.body;
    try {
        const order = await Order.findById(orderId);
        const deliveryBoy = await DeliveryBoy.findById(deliveryBoyId);

        if (!order || !deliveryBoy || !deliveryBoy.isAvailable) {
            return res.status(400).json({ message: 'Invalid order or delivery boy' });
        }   
        order.deliveryBoy = deliveryBoyId;
        order.status = 'Out for Delivery';
        await order.save();
        deliveryBoy.isAvailable = false;
        await deliveryBoy.save();
        res.status(200).json({ message: 'Order assigned to delivery boy successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Update delivery location
const updateDeliveryLocation = async (req, res) => {
    const { id } = req.params;
    const { latitude, longitude } = req.body;
    try {
        const deliveryBoy = await DeliveryBoy.findById(id);
        if (!deliveryBoy) {
            return res.status(404).json({ message: 'Delivery boy not found' });
        }
        deliveryBoy.location = { latitude, longitude };
        await deliveryBoy.save();
        res.status(200).json({ message: 'Location updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Delivery boy login
const deliveryBoyLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const deliveryBoy = await DeliveryBoy.findOne({ email });
        if (!deliveryBoy || deliveryBoy.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful', deliveryBoy });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

module.exports = {
    getAvailableDeliveryBoys,
    assignOrderToDeliveryBoy,
    updateDeliveryLocation,
    deliveryBoyLogin
};