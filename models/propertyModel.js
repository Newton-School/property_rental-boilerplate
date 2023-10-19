const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  // TODO: Define the properties of the model
  // Field 1: Define a property for 'title' with a String data type and required true
  // Field 2: Define a property for 'location' with a String data type and required true
  // Field 3: Define a property for 'price' with a Number data type and required true
  // Field 4: Define a property for 'type' with a String data type and required true
});

module.exports = mongoose.model('Property', propertySchema);
