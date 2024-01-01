// importamos la ruta API: /api/products/total
app.get('/api/products/total', (req, res) => {
    
    const totalProducts = productos.length; // ajusta esto según tu implementación
    res.json({ totalProducts });
  });