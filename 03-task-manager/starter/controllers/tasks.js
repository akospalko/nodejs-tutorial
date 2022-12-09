const getAllTasks = (req, res) => {
  res.send('get all tasks')
}

const getTask = (req, res) => {
  // res.send('get single task'); 
  res.json({ id: req.params.id });
}

const createTask = (req, res) => {
  // res.send('create task');
  res.json(req.body); // send back request body as json. It will only work if we apply express.json middleware ( app.use(express.json())) 
}

const updateTask = (req, res) => {
  res.send('update task');
}

const deleteTask = (req, res) => {
  res.send('delete task');
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}