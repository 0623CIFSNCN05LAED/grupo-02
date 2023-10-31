module.exports = (req, res, next) => {
  console.log(req.session.userData)
    if (req.session.userData) {
      next();
    } else {
      res.redirect("/login");
    }
  };