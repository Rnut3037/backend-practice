"use strict";

const { createNullProtoObjWherePossible } = require("ejs/lib/utils");

const users = {
  id: ["pso3037", "pho9902", "20-71008837"],
  psword: ["tjsdn3032!", "gusdn990212", "010105"],
};

const output = {
  hello: (req, res) => res.render("home/index"),

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          sucess: true,
          msg: "로그인에 성공하였습니다.",
        });
      }
    }
    return res.json({
      sucess: false,
      msg: "아이디 혹은 패스워드가 틀렸습니다.",
    });
  },
};

//바깥에 주기
module.exports = {
  output,
  process,
};
