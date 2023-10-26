const db = require("../data/usersdb");

const userServices = {
    createUser: (user) => {
        db.create(user);
      },
    findUser:(user)=>{
        return db.findByUser(user);
    }
  };

module.exports = userServices;
