const mongoose = require('mongoose');

//predefined values:
const maxlength = 100;

const TaskSchema = new mongoose.Schema({ //constructor of our database documents (the database will accept parameters with the keys specified below)
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [maxlength, `character length must be less than ${maxlength}`],
  }, 
  completed: {
    type: Boolean,
    default: false,
  }
})

module.exports = mongoose.model('Task', TaskSchema) // exporting schema as a model (Models are fancy constructors compiled from Schema definitions.)