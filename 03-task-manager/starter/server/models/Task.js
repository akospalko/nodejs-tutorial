const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({ //constructor of our database documents (the database will accept parameters with the keys specified below)
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'char length must be less than 20'],
  }, 
  completed: {
    type: Boolean,
    default: false,
  }
})

module.exports = mongoose.model('Task', TaskSchema) // exporting schema as a model (Models are fancy constructors compiled from Schema definitions.)