const { Schema } = require('mongoose');

module.exports = new Schema({
  task: String,
  created: String,
  status: String,
});