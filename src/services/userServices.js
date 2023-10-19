const db = require("../data/usersdb");

const userServices = {
    createUser: (user) => {
        db.create(user);
      },
    findUser:(user)=>{
        db.findByUser(user);
    }
  };

module.exports = userServices;
