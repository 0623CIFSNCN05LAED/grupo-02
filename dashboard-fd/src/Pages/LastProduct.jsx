import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useState } from "react";

function LastProduct() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/products/lastproduct')
        .then(response => response.json())
        .then(data => {
            setProduct(data.data)
            console.log('Datos de la API:', data);
        })
        .catch(error => {
            console.log(error)
        });
    }, [])

    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/users/lastuser')
        .then(response => response.json())
        .then(data => {
            setUser(data.data)
            console.log('Datos de la API:', data);
        })
        .catch(error => {
            console.log(error)
        });
    }, [])
          

    return (
        <div>
            <div>
                <h1 className="text-2xlmy-10">Último producto creado</h1>
            </div>
            <div className="bg-white p-8 rounded-xl">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 p-4">
                    <h5>ID</h5>
                    <h5>Name</h5>
                    <h5>Price</h5>
                    <h5>Category</h5>
                </div>
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
              <span>{product.category_id}</span>
            </div>
          </div>
      </div>
            <div>
                <h1 className="text-2xlmy-10">Último usuario creado</h1>
            </div>

      <div className="bg-white p-8 rounded-xl">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 p-4">
                    <h5>ID</h5>
                    <h5>Name</h5>
                    <h5>Email</h5>
                    <h5>Role</h5>
                </div>
          <div key={user.id} className="grid text-white grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>{user.id}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Name</h5>
              <p>{user.name}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">email</h5>
              <span>{user.email}</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Role</h5>
              <span>{user.role_id}</span>
            </div>
          </div>
      </div>
    </div>

  );
}



export default LastProduct