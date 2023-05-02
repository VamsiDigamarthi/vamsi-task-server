import TaskModel from "../Models/TaskModel.js";
import UserModel from "../Models/UserModel.js";

export const userAccess = async (req, res) => {
  const { role } = req.body;
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
