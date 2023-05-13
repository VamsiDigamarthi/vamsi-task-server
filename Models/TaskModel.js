import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    username: {
      type: String,
      require: true,
    },
    head: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    // created_At: { type: Date, default: new Date().toLocaleDateString() },
    // updated_At: { type: Date, default: new Date().toLocaleDateString() },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("tasks", TaskSchema);

export default TaskModel;
