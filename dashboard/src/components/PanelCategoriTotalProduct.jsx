// enrutamos la API: /api/categories/withTotalProducts
app.get('/api/categories/withTotalProducts', (req, res) => {
    
    const categoriesWithTotalProducts = categorias.map(categoria => {
      return {
        id: categoria.id,
        name: categoria.name,
        totalProducts: productos.filter(producto => producto.categoryId === categoria.id).length,
      };
    });
  
    res.json(categoriesWithTotalProducts);
  });