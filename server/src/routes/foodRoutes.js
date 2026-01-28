const express = require('express');
const router = express.Router();
const { getAllFoodItems, getFoodItemById, getFoodItemsByVendor } = require('../controllers/foodController');    

// get all food items
router.get('/', getAllFoodItems);

// get single food item by id
router.get('/:id', getFoodItemById);

//  get vendor specific food items
router.get('/vendor/:vendorId', getFoodItemsByVendor);

module.exports = router;