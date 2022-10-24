"use strict";

const { createNullProtoObjWherePossible } = require("ejs/lib/utils");
const User = require("../../models/User");

// 아이디비번 임포트
const UserStorage = require("../../models/UserStorage");

// 클라이언트가 get요청으로 접속 하면 해당 페이지를 렌더링
const output = {
  hello: (req, res) => res.render("home/index"),

  login: (req, res) => {
    res.render("home/login");
  },

  play: (req, res) => {
    res.render("home/play");
  },
};

// 로그인 수행 코드
const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

//바깥에 주기
module.exports = {
  output,
  process,
};
