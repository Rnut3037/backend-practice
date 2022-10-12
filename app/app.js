"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
// bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 기본경로설정
app.use(express.static(`${__dirname}/src/public`));
app.use("/", home);

module.exports = app;
