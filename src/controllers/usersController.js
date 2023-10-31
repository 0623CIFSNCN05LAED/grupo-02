const userService = require('../services/userServices')
const bcrypt = require('bcrypt');


const usersController = {
    login: function(req,res){
        
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

    register: function(req,res){
        
        res.render('users/register.ejs', { userData: req.session.userData } );
    },
    store: function(req, res){
        const user = {
            role: req.body.role,
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
    },
    
}
module.exports = usersController;