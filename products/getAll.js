const fs = require('fs/promises');
const productsPath = require("./productsPath");

//const productsPath = `${__dirname}/products.json`;


const getAll = async() => {
  const data = await fs.readFile(productsPath);
  const products = JSON.parse(data);
  return products;
  
  //считаем файл products.json
  // const products = await fs.readFile('products.json');
  // return products;
}

module.exports = getAll;