//En este caso, vamos a crear peticiones a una API
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //requerimos del módulo de xmlhttprequest
const API = 'https://api.escuelajs.co/api/v1'; // Alojamos en una variable la url de la api

//creamos una función en donde se encuetra toda nuestra lógica.
function fetchData(urlApi, callback) {

  let xhttp = new XMLHttpRequest(); //nueva instancia del módulo que estamos requiriendo.

  //Abrimos la solicitud pasándole como argumento(GET, urlApi, true para que se habilite)
  xhttp.open('GET', urlApi, true);

  // Esta propiedad onreadystatechange se encarga de validar si hay cambios en el estatus
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      callback(null, JSON.parse(xhttp.responseText));
    } else {
      const error = new Error('Error ' + urlApi);
      return callback(error, null);
    }
  }
  xhttp.send()
}

fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});