"use strict";

const { createNullProtoObjWherePossible } = require("ejs/lib/utils");

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
    const id = req.body.id;
    const psword = req.body.psword;

    const users = UserStorage.getUsers("id", "psword");

    const response = {};

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        response.sucess = true;
        return res.json(response);
      }
    }
    response.sucess = false;
    response.msg = "로그인에 실패햐였습니다.";
    return res.json(response);
  },
};

//바깥에 주기
module.exports = {
  output,
  process,
};
