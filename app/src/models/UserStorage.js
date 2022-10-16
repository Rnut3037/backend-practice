"use strict";

class UserStorage {
  static #users = {
    id: ["pso3037", "pho9902", "20-71008837"],
    psword: ["tjsdn3032!", "gusdn990212", "010105"],
    name: ["박선우", "박현우", "이수형"],
  };

  static getUsers(...fileds) {
    const users = this.#users;
    const newUsers = fileds.reduce((newUsers, filed) => {
      if (users.hasOwnProperty(filed)) {
        newUsers[filed] = users[filed];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
