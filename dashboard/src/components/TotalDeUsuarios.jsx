// importamos ruta de API: /api/users/total
app.get('/api/users/total', (req, res) => {
    
    const totalUsers = usuarios.length; // ajusta esto según tu implementación
    res.json({ totalUsers });
  });