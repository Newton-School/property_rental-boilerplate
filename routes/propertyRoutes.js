const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

// Get all properties
router.get('/properties', propertyController.getAllProperties);

// Create a property
router.post('/properties', propertyController.createProperty);

// Search properties based on a search term
router.get('/properties/search', propertyController.searchProperties);

// Filter properties based on location, price, and type
router.get('/properties/filter', propertyController.filterProperties);

module.exports = router;
