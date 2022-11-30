const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoutes");
const { urlencoded } = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/v1/tasks", taskRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/Task", () => {
  console.log("Db is connected");
  app.listen(4000, () => {
    console.log(`Server is up and running at http://localhost:4000`);
  });
});
