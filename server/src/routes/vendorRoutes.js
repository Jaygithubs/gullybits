const express = require('express');
const router = express.Router();
const { getAllVendors,getVendorDetails,addFoodItemToVendorMenu,updateFoodItemInVendorMenu,deleteFoodItemFromVendorMenu,getVendorOrders } = require('../controllers/vendorController');

// Get all vendors
router.get('/', getAllVendors);

// Get vendor details by ID
router.get('/:id', getVendorDetails);

// add food item to vendor's menu
router.post('/add-food-item/:vendorId', addFoodItemToVendorMenu);

// update food item in vendor's menu - to be implemented
router.put('/update-food-item/:vendorId/:foodItemId', updateFoodItemInVendorMenu);

// delete food item from vendor's menu - to be implemented
router.delete('/delete-food-item/:vendorId/:foodItemId', deleteFoodItemFromVendorMenu);

// get order list of vendor
router.get('/orders/:vendorId', getVendorOrders);

module.exports = router;
