//importamos la ruta de la api 
app.get('/api/products/latest', (req, res) => {
   const latestProduct = productos[productos.length - 1]; // ajusta esto según tu implementación
    res.json(latestProduct);
  });

  //importamos la ruta de esta otra api API: /api/users/latest
app.get('/api/users/latest', (req, res) => {
  // Supongamos que tienes una base de datos con usuarios y obtienes el último
  const latestUser = usuarios[usuarios.length - 1]; // ajusta esto según tu implementación
  res.json(latestUser);
});