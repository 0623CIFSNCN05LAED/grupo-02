module.exports = (req, res, next) => { 
        if (req.session.userData){
            return next();
        }
        else {
            res.redirect('/users/login')
        }
    };

