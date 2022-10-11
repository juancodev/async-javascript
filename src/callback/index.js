// Callback: Son funciones que se pasan como argumentos de otras funciones.

function sum(number1, number2) {
  return number1 + number2;
}

// Creamos otra función que obtenga tres o más parámetros, pero el último siempre debe ser el callback y la pasamos para realizar
function calc(number1, number2, callback) {
  return callback(number1, number2);
}

console.log(calc(2, 2, sum));


// El SetTimeout, es una web api que se encarga de realizar el navegador
setTimeout(function () {
  console.log('Hola, soy un mensaje que aparece al transcurrir 2 segundos');
}, 2000);

// El SetTimeout, recibe un callback como argumento al iniciar la funcion, en este caso, no la recibe al principio y al final, recibe los argumentos.
setTimeout(greatting, 5000, 'Juan');

function greatting(name) {
  console.log(`Hola ${name}`);
}