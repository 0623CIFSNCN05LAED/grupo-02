const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require('bcrypt');

const userdb = {
    create: (user) => {
        console.log(`Creating user ${user.name}`);
        const usersFilePath = path.join(
          __dirname,
          "../data/users.json"
        );
        const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

        const newUser = {
          id: uuidv4(),
          ...user,
        };
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
      },
    findByUser:(user)=>{
      console.log(`Ingreso ${user}`);
      const usersFilePath = path.join(
        __dirname,
        "../data/users.json"
      );
      const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
      const userName = users.find( (p) => p == p.user)
      return userName;
    }
}

module.exports = userdb;