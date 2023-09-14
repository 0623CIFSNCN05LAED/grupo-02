const express = require ('express');
const path = require ('path');

const productRoutes = require ('./routes/productRoutes.js');
const mainRoutes = require ('./routes/mainRoutes.js');
const usersRoutes = require ('./routes/usersRoutes.js');

const app = express();

//se define la carpeta public como carpeta de archivos publicos
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

//se configura ejs como view engine y se indica la ubicacion de la carpeta views
const viewsPath = path.join(__dirname,'/views');
app.set('view engine','ejs');
app.set('views',viewsPath);

//se definen las rutas a cada uno de los recursos de la aplicacion

app.use('/',mainRoutes);
app.use('/product',productRoutes);
app.use('/users',usersRoutes);

//se levanta el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT,()=>console.log(`Servidor corriendo en el puerto ${PORT}`));