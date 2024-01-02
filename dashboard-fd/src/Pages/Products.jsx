import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.data)
            console.log('Datos de la API:', data);
        })
        .catch(error => {
            console.log(error)
        });
    }, [])
          

    return (
        <div>
            <div>
                <h1 className="text-2xlmy-10">Productos</h1>
            </div>
            <div>

            </div>
            <div className="bg-white p-8 rounded-xl">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 p-4">
                    <h5>ID</h5>
                    <h5>Name</h5>
                    <h5>Price</h5>
                    <h5>Category</h5>
                </div>
                {products.map(product => (
          <div key={product.id} className="grid text-white grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{product.id}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Name</h5>
              <p>{product.name}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Price</h5>
              <span>{product.price}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Category</h5>
              <span>{product.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Products