const express = require('express');
const Room = require('../models/roomModel');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  const newRoom = new Room({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    capacity: req.body.capacity,
    price: req.body.price
  });

  try {
    const savedRoom = await newRoom.save();
    res.json(savedRoom);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedRoom = await Room.updateOne({ id: req.params.id }, { $set: req.body });
    res.json(updatedRoom);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedRoom = await Room.deleteOne({ id: req.params.id });
    res.json(deletedRoom);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/:id', async (req, res) => {
    const roomId = req.params.id;
  
    try {
      const room = await Room.findOne({ id: roomId });
      if (room) {
        res.json(room);
      } else {
        res.status(404).send('Habitación no encontrada');
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = router;
