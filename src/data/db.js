const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");


const db = {
  products: {
    getProducts:() => {
      const productsFilePath = path.join(
        __dirname,
        "../data/products.json"
      );
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      return products;
    },
    saveProducts: function (products) {
      const productsFilePath = path.join(__dirname, "./products.json");
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    },
    findAll: () => {
      const productsFilePath = path.join(
        __dirname,
        "../data/products.json"
      );
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      console.log(products)
      return products;
    },
    findById: (id) => {
        const productsFilePath = path.join(
        __dirname,
        "../data/products.json"
      );
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      const product = products.find((product) => product.id == id)
          
      return product;
    },
    create: (product) => {
      console.log(`Creating product ${product.name}`);
      const productsFilePath = path.join(
        __dirname,
        "../data/products.json"
      );
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      const newProduct = {
        id: uuidv4(),
        ...product,
      };
      products.push(newProduct);
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    },
    update: (id, product) => {
      console.log(`Updating product ${product.name}`);
      const productsFilePath = path.join(
        __dirname,
        "../data/products.json"
      );
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      const productToEdit = products.find((product) => product.id == id);
      Object.assign(productToEdit, product);
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
      return product;
    },
    delete: (id) => {
      console.log(`Deleting product with id ${id}`);
      const productsFilePath = path.join(
        __dirname,
        "../data/products.json"
      );
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      const nonDeletedProducts = products.filter((product) => product.id != id);
      fs.writeFileSync(productsFilePath, JSON.stringify(nonDeletedProducts, null, 2));
    },
  },
};
module.exports = db;