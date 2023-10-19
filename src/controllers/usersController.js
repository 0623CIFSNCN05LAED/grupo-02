const userService = require('../services/userServices')

const usersController = {
    login: function(req,res){
        res.render('users/login.ejs');
    },

    loginData: function(req,res){
        const userData = {
            user: req.body.usuario,
            password:req.body.password
        }

        const userFound = userService.findUser(userData.user)
            if (userFound && userFound.password == userData.password){
              res.redirect("/home");
            }else{
                res.redirect("/users/login")
            }
    },

    register: function(req,res){
        res.render('users/register.ejs');
    },
    store: function(req, res){
        const user = {
            name: req.body.nombre,
            user: req.body.usuario,
            email: req.body.correo,
            password: req.body.contraseña,
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