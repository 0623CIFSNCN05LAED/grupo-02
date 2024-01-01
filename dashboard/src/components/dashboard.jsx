
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [latestProduct, setLatestProduct] = useState(null);
  const [latestUser, setLatestUser] = useState(null);
  const [categoriesWithTotalProducts, setCategoriesWithTotalProducts] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async (url, setDataCallback) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDataCallback(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
// terminar de enrutar apis y definir sus nombres

    fetchData('/api/products/total', setTotalProducts);
    fetchData('', setTotalUsers);
    fetchData('', setTotalCategories);
    fetchData('', setLatestProduct);
    fetchData('', setLatestUser);
    fetchData('', setCategoriesWithTotalProducts);
    fetchData('/', setProductList);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <h2>Totales:</h2>
        <p>Total de productos: {totalProducts}</p>
        <p>Total de usuarios: {totalUsers}</p>
        <p>Total de categorías: {totalCategories}</p>
      </div>

      <div>
        <h2>Detalle del último producto:</h2>
        {latestProduct && (
          <div>
            <p>ID: {latestProduct.id}</p>
            <p>Nombre: {latestProduct.name}</p>
            <p>Descripción: {latestProduct.description}</p>
          </div>
        )}
      </div>

      <div>
        <h2>Categorías con total de productos:</h2>
        {categoriesWithTotalProducts.map(category => (
          <div key={category.id}>
            <p>Categoría: {category.name}</p>
            <p>Total de productos: {category.totalProducts}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>Listado de productos:</h2>
        <ul>
          {productList.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;