const db = require("../data/usersdb");
const databa = require('../database/models')

// const userServices = {
//   createUser: (user) =>{
//     databa.Users.create();  
//   },
//   findUser: (user) => {
//     return databa.User.findAll(user)
//   }
// }

const userServices = {
createUser: (user) => {
db.create(user);
 },
findUser:(user)=>{
return db.findByUser(user);
}
};

module.exports = userServices;
