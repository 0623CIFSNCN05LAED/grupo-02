//  ruta de API: /api/products/list
app.get('/api/products/list', (req, res) => {
    
    res.json(productos);
  });