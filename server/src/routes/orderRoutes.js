const express = require('express');
const router = express.Router();
const { createOrder,getOrderById,UpdateOrderStatus,getUserOrders,getVendorOrders } = require('../controllers/orderController');

// Route to create a new order
router.post('/', createOrder);

// Get order details by ID
router.get('/:orderId', getOrderById);

// Update order status
router.put('/:orderId/status', UpdateOrderStatus);

// Get user order details
router.get('/user/:userId', getUserOrders);

// Get vendor order details
router.get('/vendor/:vendorId', getVendorOrders);

module.exports = router;