const userService = require('../services/userServices')
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const {Users}= require('../database/models')
const {Roles} = require('../database/models')


const usersController = {
        login: function(req, res){
            res.render('users/login.ejs', { errors: req.session.errors, userData: req.session.userData , userError: req.session.userError , contraError: req.session.errorContra });
        },
    loginData: async function(req,res){
        const userData = {
            user: req.body.usuario,
            password:req.body.contra
        }
       
        const usuarioData = userData.user;
        const name = await Users.findOne({where:{ email: userData.user} })
        const userFound = await userService.findUser(usuarioData);
            if(userFound){
                bcrypt.compare(userData.password, userFound.password, (err, result) => {
                    if (err) {
                    } else {
                      if (result) {
                        req.session.userData = name.dataValues;
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
        const roles = await Roles.findAll()
        console.log(req.session.errorNameRegister)
        res.render('users/register.ejs', { errorNameRegister: req.session.errorNameRegister, errorEmail: req.session.emailError, multerError : req.session.multer, roles, userData: req.session.userData } );

    },
    store: async function(req, res){
        const hashedPassword = await bcrypt.hash(req.body.contra, 10);
            if (!req.body.role){
                req.body.role = 1;
            }
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