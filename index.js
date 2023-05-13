import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import AuthRoute from "./Routes/AuthRoute.js";
import TaskRoute from "./Routes/TaskRoute.js";
import TeamRoute from "./Routes/TeamRoute.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//app.listen(5000, () => console.log("your server is running on port number 5000.........."));
mongoose
  .connect("mongodb://127.0.0.1:27017/task", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(5000, () =>
      console.log("Listening server and connect db ........")
    )
  )
  .catch((error) => console.log(`this is db not connected ${error}`));

app.use("/auth", AuthRoute);
app.use("/tasks", TaskRoute);

//
app.use("/team", TeamRoute);
