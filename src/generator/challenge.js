import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};

async function* valueData(urlApi) {
  try {
    const products = await fetchData(`${API}/products`);
    yield console.log(products);

    const product = await fetchData(`${API}/products/${products[0].id}`);
    yield console.log(product.title);

    const category = await fetchData(`${API}/categories/${product.category.id}`);
    yield console.log(category.name);

  } catch (err) {
    console.error(err);
  }
}

const dataValue = valueData(API);
dataValue.next();
dataValue.next();