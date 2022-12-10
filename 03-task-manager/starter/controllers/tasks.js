const Task = require('../models/Task');

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body) // create a document based on the req.body coming from front-end/postman
    res.status(201).json({ task }); // send back request body as json. It will only work if we apply express.json middleware ( app.use(express.json()))
  } catch(err) {
    console.log(err);
    res.status(500).json({ msg:err }) // general server error with error message
  }
  // res.send('create task');
  // res.json(req.body); // send back request body as json. It will only work if we apply express.json middleware ( app.use(express.json()))
}

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({}) // get all docs if no params are passed
    res.status(200).json({ task });
  } catch(err) {
    res.status(500).json({msg: err});
  }
  res.send('get all tasks')
}

const getTask = async (req, res) => { // get single task
  try {
    const { id:taskID } = req.params;
    const task = await Task.findOne({_id: taskID});
    if(!task) { // if no document with the passed id
      return res.status(404).json({msg: `no task with ${ taskID }`});
    }
      res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
  // res.send('get single task');
  // res.json({ id: req.params.id });
}

const updateTask = async (req, res) => {
try {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true, // gives back the updated file. If omitted: task will serve us the pre-update file.
    runValidators: true // applies the task schema validation options to this query
  });
  if(!task) {
    return res.static(404).json({msg: `no task with ${ taskID }`});
  }
  res.status(200).json({task})
} catch(err) {
  res.status(500).json({ msg: err })
}
}

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params; 
  const task = await Task.findOneAndDelete({ _id: taskID });
  try {
    if(!task) {
      return res.status(404).json({msg: `no task with ${ taskID }`});
    }
    res.json({ task });
  } catch(err) {
    res.status(500).json({ msg: err });
    }
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}