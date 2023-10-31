const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const productRoutes = require("./routes/productRoutes.js");
const mainRoutes = require("./routes/mainRoutes.js");
const usersRoutes = require("./routes/usersRoutes.js");
const session = require("express-session");
const bodyParser = require('body-parser');

const app = express();

app.use(
  session({
    secret: 'mi-secreto',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
  })
);

//se define la carpeta public como carpeta de archivos publicos
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//se configura ejs como view engine y se indica la ubicacion de la carpeta views
const viewsPath = path.join(__dirname, "/views");
app.set("view engine", "ejs");
app.set("views", viewsPath);

//se definen las rutas a cada uno de los recursos de la aplicacion

app.use("/", mainRoutes);
app.use("/product", productRoutes);
app.use("/users", usersRoutes);


// app.use(
//     session({ secret: "secret", resave: false, saveUninitialized: false })
//   );



//se levanta el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
