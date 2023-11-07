const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
