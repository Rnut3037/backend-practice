"use strict";

const express = require("express");
const app = express();

const home = require("./src/routes/home");
//asldkfsldfk
// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/js", express.static(`${__dirname}/src/public`));
app.use("/", home);

module.exports = app;
