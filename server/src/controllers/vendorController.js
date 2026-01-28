const Vendors = require('../models/Vendor');
const Orders = require('../models/Order');

// Controller to get all vendors
const getAllVendors = async (req, res) => {
    try {
        const vendors = await Vendors.find();
        res.status(200).json(vendors);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }   
};

// Get vendor details by ID
const getVendorDetails = async (req, res) => {
    try {
        const vendor = await Vendors.findById(req.params.id);
        if (!vendor) {
            return res.status(404).json({ message: 'Vendor not found' });
        }
        res.status(200).json(vendor);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Controller to add food item to vendor's menu
const addFoodItemToVendorMenu = async (req, res) => {
    try {
        const { vendorId } = req.params;
        const foodItem = req.body;
        const vendor = await Vendors.findById(vendorId);
        if (!vendor) {
            return res.status(404).json({ message: 'Vendor not found' });
        }
        vendor.menu.push(foodItem);
        await vendor.save();
        res.status(200).json({ message: 'Food item added successfully', vendor });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }   
};

// update food item in vendor's menu - to be implemented
const updateFoodItemInVendorMenu = async (req, res) => {
    try {
        const { vendorId, foodItemId } = req.params;
        const updatedFoodItem = req.body;
        const vendor = await Vendors.findById(vendorId);
        if (!vendor) {
            return res.status(404).json({ message: 'Vendor not found' });
        }
        const foodItemIndex = vendor.menu.findIndex(item => item._id.toString() === foodItemId);
        if (foodItemIndex === -1) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        vendor.menu[foodItemIndex] = { ...vendor.menu[foodItemIndex], ...updatedFoodItem };
        await vendor.save();
        res.status(200).json({ message: 'Food item updated successfully', vendor });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// delete food item from vendor's menu - to be implemented
const deleteFoodItemFromVendorMenu = async (req, res) => {
    try {
        const { vendorId, foodItemId } = req.params;
        const vendor = await Vendors.findById(vendorId);
        if (!vendor) {
            return res.status(404).json({ message: 'Vendor not found' });
        }
        vendor.menu = vendor.menu.filter(item => item._id.toString() !== foodItemId);
        await vendor.save();
        res.status(200).json({ message: 'Food item deleted successfully', vendor });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// get order list of vendor - to be implemented
const getVendorOrders = async (req, res) => {
    try {
        const { vendorId } = req.params;
        const orders = await Orders.find({ vendor: vendorId });
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};



module.exports = { getAllVendors,getVendorDetails,addFoodItemToVendorMenu,updateFoodItemInVendorMenu,deleteFoodItemFromVendorMenu,getVendorOrders };