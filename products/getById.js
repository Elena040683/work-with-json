const getAll = require("./getAll");

const getById = async(id) => {
  const products = await getAll();
  const result = products.find(item => item.id === id);
  return result;
}

module.exports = getById;