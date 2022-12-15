const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async-wrapper')

const getSchema = asyncWrapper(async (req, res) => {
  const schema = await Task.schema.obj;
  let filteredSchema = {};
  for(const key in schema) {
    const { type, trim, ...rest } = schema[key]
    filteredSchema = {...filteredSchema, [key]: rest};
  }
  console.log('filtered schema',filteredSchema);
  res.status(200).json( filteredSchema );
})

module.exports = { getSchema };