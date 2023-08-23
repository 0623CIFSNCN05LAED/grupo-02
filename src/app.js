const express = require ('express');
const path = require ('path');

const app = express();

//se define la carpeta public como carpeta de archivos publicos
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

//se definen las rutas a cada uno de los recursos de la aplicacion
app.get('/',function(req,res){
    const homePath = path.join(__dirname,'/views/home.html');
    res.sendFile(homePath);
});

app.get('/login',function(req,res){
    const loginPath = path.join(__dirname,'/views/login.html');
    res.sendFile(loginPath);
});

app.get('/register',function(req,res){
    const registerPath = path.join(__dirname,'/views/register.html');
    res.sendFile(registerPath);
});

app.get('/productDetail',function(req,res){
    const productDetailPath = path.join(__dirname,'/views/productDetail.html');
    res.sendFile(productDetailPath);
});

app.get('/productCart',function(req,res){
    const productCartPath = path.join(__dirname,'/views/productCart.html');
    res.sendFile(productCartPath);
});

//se levanta el servidor en el puerto 3000
app.listen(3000,()=>console.log('Servidor corriendo en el puerto 3000'));