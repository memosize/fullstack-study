const express = require("express");
const userRouter = require("./user");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const DB_URL = "mongodb://127.0.1:27017/immoc";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", function() {
  console.log("mongo connect success ");
});

const app = express();
app.use(cookieParser());
app.use(bodyParser());
app.use("/user", userRouter);

app.listen(9093, function(req, res) {
  console.log("node.js start port 9093");
});
