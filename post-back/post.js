// get express and and initialize it
const express = require("express");
const app = express();

// make port var

const PORT = process.env.PORT || 3001;

// get morgan
const morgan = require("morgan");
// get mongoose
const mongoose = require("mongoose");
// get cors
const cors = require("cors");
// initialize middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// coneect to DB

mongoose
  .connect("mongodb://127.0.0.1/post_db")
  .then(() => {
    console.log("conect to mongo");
  })
  .catch((err) => {
    console.log("connaction faild", err);
  });

app.get("/", (req, res) => {
  res.send("express is runing");
});
app.use("/posts", require("./router/route"));

app.listen(PORT, () => {
  console.log(`app run on port : ${PORT}`);
});
