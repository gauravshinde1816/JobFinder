const express = require("express");
const mongoose = require("mongoose");
const Jobs = require("./models/Jobs");
const app = express();
mongoose
  .connect("mongodb://127.0.0.1:27017/jobfinder")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err.message));

app.get("/", async (req, res) => {
  const jobs = await Jobs.find({});
  console.log(jobs);
  return res.send("Hello world");
});

const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log("Server has started");
});
