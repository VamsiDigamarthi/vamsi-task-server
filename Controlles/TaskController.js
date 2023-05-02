import TaskModel from "../Models/TaskModel.js";

export const employeeTaskGet = async (req, res) => {
  //   const { username, password } = req.body;
  //   const getUser = await TaskModel.findOne({ username: username });
  //   const {name} = getUser
  const { name } = req.body;
  try {
    const tasks = await TaskModel.find({ username: name });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addTask = async (req, res) => {
  const { task, description, username, head, status } = req.body;
  const newTask = new TaskModel({
    task,
    description,
    username,
    head,
    status,
  });
  try {
    const task = await newTask.save();

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editTask = async (req, res) => {
  const id = req.params.id;

  try {
    const updateT = await TaskModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateT);
  } catch (e) {
    res.status(400).json(e);
  }
};
