const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const ticketSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
});

// Create the model class
const ModelClass = mongoose.model('tickets', ticketSchema);

// Export the model
module.exports = ModelClass;
