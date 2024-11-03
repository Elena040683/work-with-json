const productsOperations = require('./products');

// 1. Получить все товары 
// 2. Получить один товар по id
// 3. Добавить товар в список
// 4. Обновить товар по id
// 5. Удалить товар по id


const invokeAction = async({action, id, name, price}) => {
  switch(action){
    case "getAll":
      const products = await productsOperations.getAll();
      console.log(products);
      break;
    case "getById":
      const product = await productsOperations.getById(id);
      console.log(product);
      break;
    case "add":
      const newProd = await productsOperations.add({name, price});
      console.log(newProd);
      break;
    case "updateById":
      const updateById = await productsOperations.updateById({id, name,price});
      console.log(updateById);
      break; 
    case "removeById":
      const removeProduct = productsOperations.removeById(id);
      console.log(removeProduct);
    default:
      console.log("Unknown action");
  }
};

const data = {
  name: "IPhone",
  price: 17000
}

const updateData = {
  name: "pen",
  price: 0.55
}

const updateId = "5"
const id = "2"
//invokeAction({action:n'getAll'});
//invokeAction({action: 'getById', id});
//invokeAction({action: 'add', ...data});
//invokeAction({action: 'updateById', ... updateData, id: updateId});

const removeId = "3";
invokeAction({action: 'removeById', id: removeId});
