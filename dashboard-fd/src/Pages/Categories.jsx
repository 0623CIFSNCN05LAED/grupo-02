import React, { useEffect } from "react";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useState } from "react";

function Categories() {
    const [category, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/products/apicategories')
        .then(response => response.json())
        .then(data => {
            const categories = data.data
            setCategories(categories)
        })
        .catch(error => {
            console.log(error)
        });
    }, [])
          

    return (
        <div>
            <div>
                <h1 className="text-2xlmy-10">Categorías</h1>
            </div>
            <div className="bg-white p-8 rounded-xl">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 p-4">
                    <h5>Nombre de la categoria</h5>
                    <h5>Total de productos por categoria</h5>
                </div>
          {category.map(category => (
          <div key={category.name} className="grid text-white grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Nombre de la categoria</h5>
              <p>{category.name}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Total de productos por categoria</h5>
              <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
                {category.total}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories