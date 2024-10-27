const express = require('express');
const Prediction = require('../models/Prediction');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
  const prediction = new Prediction({ userId: req.user.id, ...req.body });
  await prediction.save();
  res.status(201).json(prediction);
});

router.get('/:eventId', authenticateToken, async (req, res) => {
  const predictions = await Prediction.find({ eventId: req.params.eventId, userId: req.user.id });
  res.json(predictions);
});

module.exports = router;
