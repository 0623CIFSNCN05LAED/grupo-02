module.exports = (req, res, next) => {
    if (req.session.userData) {
      console.log(req.session.userData);
      next();
    } else {
      res.redirect("/users/login");
    }
  };