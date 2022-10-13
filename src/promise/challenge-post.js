import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST', // método a pasar
    mode: 'cors', // permisos
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json'
    }, // cabecera para que sea entendible por el server
    body: JSON.stringify(data) // información que le quiero transmitir a la API
  })
  return response;
}

const data = {
  "title": "New Product Course",
  "price": 1000,
  "description": "A description for course of async in JavaScript",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));