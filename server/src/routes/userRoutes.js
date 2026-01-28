const express = require('express');
const router = express.Router();
const { getAllUsers, updateUserProfile, getUserOrders } = require('../controllers/userController');

// getting all users
router.get('/', getAllUsers);

// update user profile
router.put('/:id', updateUserProfile);

// get user all orders
router.get('/:id/orders', getUserOrders);


module.exports = router;