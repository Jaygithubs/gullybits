const User = require('../models/User');

// getting all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// update user profile
const updateUserProfile = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
// get user all orders
const getUserOrders = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).populate('orders');    
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user.orders);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

module.exports = {
    getAllUsers,
    updateUserProfile,
    getUserOrders
};