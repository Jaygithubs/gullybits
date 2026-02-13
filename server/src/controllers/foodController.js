const Food = require('../models/FoodItem');

// Get all food items
const getAllFoodItems = async (req, res) => {
    try {
        const foodItems = await Food.find();
        res.status(200).json(foodItems);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// add food item by vendor
const addFoodItemByVendor = async (req, res) => {
    try {
    
        const { name, description, price, category, isAvailable } = req.body;
        const vendorId = req.user.id; // getting user id from authenticated request
        const newFoodItem = new Food({
            name,
            description,
            price,
            category,
            isAvailable,
            vendorId,
            Image: req.file ? req.file.filename : null, // Assuming image is uploaded via multipart/form-data
        });
        await newFoodItem.save();
        res.status(201).json(newFoodItem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Get single food item by ID
const getFoodItemById = async (req, res) => {
    try {
        const foodItem = await Food.findById(req.params.id);
        if (!foodItem) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.status(200).json(foodItem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
// Get food items by vendor ID
const getFoodItemsByVendor = async (req, res) => {
    try {
        const foodItems = await Food.find({ vendorId: req.params.vendorId });
        res.status(200).json(foodItems);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

module.exports = {
    getAllFoodItems,
    addFoodItemByVendor,
    getFoodItemById,
    getFoodItemsByVendor
};