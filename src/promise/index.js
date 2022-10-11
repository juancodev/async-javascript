// Promesas

const cows = 15;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows in the farm!`);
  } else {
    reject("We don't have the quantity of cows in the farm")
  }
});

countCows
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() => console.log('Finally!!'));