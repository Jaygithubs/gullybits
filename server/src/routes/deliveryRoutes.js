const router = require('express').Router();
const { getAvailableDeliveryBoys, assignOrderToDeliveryBoy, updateDeliveryLocation, deliveryBoyLogin } = require('../controllers/deliveryController');

// Get available delivery boys
router.get('/available', getAvailableDeliveryBoys);

// Assign order to delivery boy
router.post('/assign', assignOrderToDeliveryBoy);

// update delivery location
router.post('/update-location/:id', updateDeliveryLocation);

// Login delivery boy
router.post('/login', deliveryBoyLogin);

module.exports = router;