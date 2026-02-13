const express = require('express');
const router = express.Router();
const { getAllFoodItems, getFoodItemById, getFoodItemsByVendor,addFoodItemByVendor } = require('../controllers/foodController');  
const upload = require('../Middleware/upload'); 
const authMiddleware = require('../Middleware/authMiddleware'); 

// get all food items
router.get('/', getAllFoodItems);

// add foot item by vendor
router.post('/vendor/add', authMiddleware, upload.single('image'), addFoodItemByVendor);

// get single food item by id
router.get('/:id', getFoodItemById);

//  get vendor specific food items
router.get('/vendor/:vendorId', getFoodItemsByVendor);

module.exports = router;