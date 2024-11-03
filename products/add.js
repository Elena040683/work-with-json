const {v4} = require("uuid");
//const fs = require("fs/promises");
//const productsPath = require("./productsPath");
const updateProducts = require('./updateProducts');
const getAll = require("./getAll");

const add = async (data) => {
  const newProduct = {...data, id: v4()};
  const products = await getAll();
  products.push(newProduct);
  await updateProducts(products);
  //await fs.writeFile(productsPath, JSON.stringify(products, null, 2))
  return newProduct;
}

module.exports = add;