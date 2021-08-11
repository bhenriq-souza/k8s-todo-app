const mongoose = require('mongoose');
const schema = require('./schemas/todos');

module.exports = mongoose.model('todos', schema);