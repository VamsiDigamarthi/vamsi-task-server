import TaskModel from "../Models/TaskModel.js";
import UserModel from "../Models/UserModel.js";

export const userAccess = async (req, res) => {
  const { role } = req.body;
  //console.log(role);
  try {
    const usersList = await UserModel.find({ head: role });
    res.status(200).json(usersList);
  } catch (e) {
    res.status(400).json(e);
  }
};

export const allTaskFeatc = async (req, res) => {
  const { role } = req.body;
  try {
    const usersALlTAskList = await TaskModel.find({ head: role });
    res.status(200).json(usersALlTAskList);
  } catch (e) {
    res.status(400).json(e);
  }
};

//
//
//
// new add admin get employee based on id

export const userAccessById = async (req, res) => {
  const id = req.params.id;
  try {
    const usersList = await UserModel.find({ head: id });
    res.status(200).json(usersList);
  } catch (e) {
    res.status(400).json(e);
  }
};

// admin add task to team

export const addAdminTaskToTeam = async (req, res) => {
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

//admin get one team leader in teams folder

export const getOneTeamLeader = async (req, res) => {
  const { role } = req.body;
  try {
    const usersList = await UserModel.find({ role: role });
    res.status(200).json(usersList);
  } catch (e) {
    res.status(400).json(e);
  }
};

// export const getOneTeam = async (req, res) => {
//   const { name } = req.body;
//   try {
//     const usersList = await UserModel.find({ name: name });
//     res.status(200).json(usersList);
//   } catch (e) {
//     res.status(400).json(e);
//   }
// };

// access admin add teams based on id

export const accessTeamBasedOnId = async (req, res) => {
  const id = req.params.id;
  try {
    const usersList = await UserModel.find({ head: id });
    res.status(200).json(usersList);
  } catch (e) {
    res.status(400).json(e);
  }
};

// add app.js get all admin s

export const getAllAdmin = async (req, res) => {
  const { role } = req.body;
  try {
    const usersList = await UserModel.find({ role: role });
    res.status(200).json(usersList);
  } catch (e) {
    res.status(400).json(e);
  }
};
