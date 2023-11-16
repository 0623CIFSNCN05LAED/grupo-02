const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/products"),
    filename: function (req, file, cb) {
        const fileName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
        req.fileName = fileName;
        cb(null, fileName);
        const nombreArchivo = req.file ? req.file.filename : 'default-image.png';
        module.exports = nombreArchivo;
    },
});
  const upload = multer({
    storage: storage,
  });

  module.exports = upload;
