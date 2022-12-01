const Container = require('./contenedor.js');
const products = new Container('./products.json');

async function Test() {

  const objeto1 = {
    title: "Product 1",
    price: 100,
    thumbnail: "url"
  }

  const objeto2 = {
    title: "Product 2",
    price: 200,
    thumbnail: "url"
  }

  const objeto3 = {
    title: "Product 3",
    price: 300,
    thumbnail: "url"
  }

  const objeto4 = {
    title: "Product 4",
    price: 400,
    thumbnail: "url"
  }

  await products.save(objeto4).then(data => console.log(data));
}

Test();