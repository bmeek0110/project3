const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  matches: [Object],
});

module.exports = mongoose.model('Event', eventSchema);
