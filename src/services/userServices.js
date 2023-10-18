const db = require("../data/usersdb");

const userServices = {
    createUser: (user) => {
        db.create(user);
      },
};

module.exports = userServices;