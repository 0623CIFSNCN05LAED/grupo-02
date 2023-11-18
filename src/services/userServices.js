const db = require("../data/usersdb");
const {Users} = require('../database/models');
const { use } = require("../routes/productRoutes");

const userServices = {
    findUser: async (user) => {
        const users = await Users.findAll()
        const userName = users.find((p) => user == p.user);
      return userName;
}
}

module.exports = userServices;
