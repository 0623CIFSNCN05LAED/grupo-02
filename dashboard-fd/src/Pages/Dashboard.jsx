import React from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useEffect,useState } from "react";


function Dashboard() {

  const [productSize, setProductSize] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(data => {
        const products = data.data;
        const newProductSize = products.length;
        setProductSize(newProductSize); // Update productSize using setProductSize
      })
      .catch(error => {
        console.log(error);
      });
  }, []); 

  const [usersSize, setUserSize] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => {
        const users = data.data;
        const newUserSize = users.length;
        setUserSize(newUserSize);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [categoriesSize, setCategoriesSize] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/products/categories')
      .then(response => response.json())
      .then(data => {
        const categories = data.data;
        setCategoriesSize(categories);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [lastProduct, setLastProduct] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/products/lastproduct')
      .then(response => response.json())
      .then(data => {
        const lastProduct = data.data.name;
        setLastProduct(lastProduct);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [lastUser, setLastUser] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/users/lastuser')
      .then(response => response.json())
      .then(data => {
        const lastUser = data.data.name
        setLastUser(lastUser)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl ">Dashboard</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <Card
          counter="products"
          totalCount={productSize}
          text="Total de productos"
        />
        <Card
          counter="users"
          totalCount={usersSize}
          text="Total de usuarios"
        />
        <Card
          counter="categories"
          totalCount={categoriesSize}
          text="Total de categorías"
        />
        <Card
          counter="last-user"
          totalCount={lastUser}
          text="Último usuario creado"
        />
        <Card
          counter="last-product"
          totalCount= {lastProduct}
          text="Último producto creado"
        />
       
      </div>

    </div>
  );
};

export default Dashboard;