const express = require ('express');
const router = express.Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/users"),
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

const upload = multer({
    storage: storage,
});
 
const usersController = require ('../controllers/usersController');

router.get ('/login',usersController.login);
router.get('/register',usersController.register);
router.post('/register', upload.single("archivo"), usersController.store, (req, res) => {
    res.sendStatus(200);
})

module.exports = router; 