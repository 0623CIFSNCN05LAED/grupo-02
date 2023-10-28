const userService = require('../services/userServices')
const bcrypt = require('bcrypt');
const userData = require("../middlewares/user-guard")


const usersController = {
    login: function(req,res){
        console.log(req.session.userData);
        res.render('users/login.ejs', { userData: req.session.userData });
    },

    loginData: function(req,res){
        const userData = {
            user: req.body.usuario,
            password:req.body.contra
        }
        const usuarioData = userData.user;
        const userFound = userService.findUser(usuarioData);
            if(userFound){
                bcrypt.compare(userData.password, userFound.password, (err, result) => {
                    if (err) {
                    } else {
                      if (result) {
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

    register: function(req,res){
        
        res.render('users/register.ejs', { userData: req.session.userData } );
    },
    store: function(req, res){
        console.log(req.body.contra)
        console.log(req.body.city)
        const user = {
            name: req.body.nombre,
            user: req.body.usuario,
            email: req.body.correo,
            password: req.body.contra,
            adress: req.body.direccion,
            country: req.body.pais,
            city: req.body.city,
            image: req.file ? req.file.filename : 'default-image.png',
        };
        
        userService.createUser(user);
        res.redirect('/');
    }
}
module.exports = usersController;