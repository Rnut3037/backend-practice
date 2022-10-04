"use strict";

const express = require("express");
const app = express();
const PORT = 3000;

const home = require("./routes/home");
//asldkfsldfk
// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;
