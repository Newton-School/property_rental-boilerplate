const Property = require('../models/propertyModel');

const seedData = async (req, res) => {
  try {
    const properties = [
      {
        title: 'Modern Downtown Loft',
        location: 'New York',
        price: 2800,
        type: 'Apartment',
      },
      {
        title: 'Charming Suburban Home',
        location: 'Los Angeles',
        price: 3200,
        type: 'House',
      },
      {
        title: 'Luxurious Penthouse Suite',
        location: 'San Francisco',
        price: 5500,
        type: 'Apartment',
      },
      {
        title: 'Spacious Family House',
        location: 'Chicago',
        price: 2900,
        type: 'House',
      },
      {
        title: 'Sleek City Condo',
        location: 'Miami',
        price: 3800,
        type: 'Condo',
      },
      {
        title: 'Cozy Mountain Cabin',
        location: 'Denver',
        price: 1800,
        type: 'Cabin',
      },
      {
        title: 'Modern Beachfront Villa',
        location: 'Los Angeles',
        price: 6000,
        type: 'Villa',
      },
      {
        title: 'Urban Studio Apartment',
        location: 'San Francisco',
        price: 2000,
        type: 'Apartment',
      },
      {
        title: 'Rustic Countryside Cottage',
        location: 'Nashville',
        price: 2200,
        type: 'Cottage',
      },
      {
        title: 'Designer Urban Loft',
        location: 'New York',
        price: 3200,
        type: 'Apartment',
      },
    ];

    await Property.insertMany(properties);
    res.status(200).json({ message: 'Data seeded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

const createProperty = async (req, res) => {
  const { title, location, price, type } = req.body;

  try {
    const property = new Property({ title, location, price, type });
    await property.save();
    res.status(201).json({ message: 'Property added successfully', property });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

const searchProperties = async (req, res) => {
  const searchTerm = req.query.searchTerm;

  try {
    const properties = await Property.find({
      title: { $regex: searchTerm, $options: 'i' },
    });
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

const filterProperties = async (req, res) => {
  const { location, minPrice, maxPrice, type } = req.query;

  const filter = {};

  if (location) filter.location = location;
  if (minPrice) filter.price = { $gte: parseInt(minPrice) };
  if (maxPrice) {
    if (filter.price) filter.price.$lte = parseInt(maxPrice);
    else filter.price = { $lte: parseInt(maxPrice) };
  }
  if (type) filter.type = type;

  try {
    const properties = await Property.find(filter);
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

module.exports = {
  getAllProperties,
  createProperty,
  searchProperties,
  filterProperties,
  seedData,
};
