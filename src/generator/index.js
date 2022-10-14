function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined

function* iterable(array) {
  for (let value of array) {
    yield value;
  }
}

const iterableFn = iterable(['Juan', 'Carlos', 'Cynthia', 'Raquel']);

console.log(iterableFn.next());
console.log(iterableFn.next());
console.log(iterableFn.next());
console.log(iterableFn.next());
console.log(iterableFn.next());