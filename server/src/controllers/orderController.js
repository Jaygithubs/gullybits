const Order = require('../models/Order');

// Create a new order
const createOrder = async (req, res) => {
    try {
        const { userId, vendorId, items, totalAmount } = req.body;
        const newOrder = new Order({ userId, vendorId, items, totalAmount, status: 'Pending' });
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get order by ID
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Update order status

const UpdateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(
            req.params.orderId,
            { status },
            { new: true }
        );
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get orders for a specific user
const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get orders for a specific vendor
const getVendorOrders = async (req, res) => {
    try {
        const orders = await Order.find({ vendorId: req.params.vendorId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

module.exports = {
    createOrder,
    getOrderById,
    UpdateOrderStatus,
    getUserOrders,
    getVendorOrders
};