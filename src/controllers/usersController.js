const userService = require('../services/userServices')
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const {Users}= require('../database/models')
const {Roles} = require('../database/models')


const usersController = {
    login: function(req,res){
        
        res.render('users/login.ejs', { userData: req.session.userData });
    },

    loginData: async function(req,res){
        const userData = {
            user: req.body.usuario,
            password:req.body.contra
        }
       
        const usuarioData = userData.user;
        const userFound = await userService.findUser(usuarioData);
            if(userFound){
                bcrypt.compare(userData.password, userFound.password, (err, result) => {
                    if (err) {
                    } else {
                      if (result) {
                        const data = req.body;
                        req.session.userData = data;
                        console.log(data)
                        res.redirect('/')
                      } else {
                        res.redirect("/users/login")
                      }
                    }
                  });
            }else{
                res.redirect("/users/login")
            }
    },
    logout: function(req, res){
        req.session.destroy((err) => {
            if (err) {
                console.error(err);
            } else {
                res.redirect('/users/login');
            }
        });
    },

    register: async function(req,res){
        const roles = await Roles.findAll({
            where: {
                name: {
                  [Sequelize.Op.not]: 'Admin',
                },
        }
    })
        res.render('users/register.ejs', { roles, userData: req.session.userData } );
    },
    store: async function(req, res){
        const hashedPassword = await bcrypt.hash(req.body.contra, 10);
            Users.create({
                    role_id: req.body.role,
                    name: req.body.nombre,
                    user: req.body.usuario,
                    email: req.body.correo,
                    password: hashedPassword,
                    adress: req.body.direccion,
                    country: req.body.pais,
                    city: req.body.city,
                    image: req.file ? req.file.filename : 'default-image.png',
                })
        res.redirect('/users/login');
    },
    
}
module.exports = usersController;