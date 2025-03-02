const array = [
  [2, 3],
  [34, 89],
  [55, 101, 34],
  [34, 89, 34, 99],
];

function flatten(array) {
  const result = [];

  for (let sublist of array) {
    for (let item of sublist) {
      result.push(item);
    }
  }

  return result;
}

let flat = flatten(array);
console.log(flat);

console.log(array.flat());

function square(array) {
  let result = [];

  for (let item of array) {
    result.push(item * item);
  }

  return result;
}

console.log(square(flat));

function map(array, f) {
  let result = [];

  for (let item of array) {
    result.push(f(item));
  }

  return result;
}

function filter(array, p) {
  let result = [];

  for (let item of array) {
    if (p(item)) {
      result.push(item);
    }
  }

  return result;
}

function reduce(array, r, initial) {
  let result = initial;

  for (let item of array) {
    result = r(result, item);
  }

  return result;
}

console.log(map(flat, (x) => x * x));

console.log(flat.map((x) => x * x));

filter(
  map(flat, (x) => x * x),
  (x) => x > 1000
);

reduce(flat, (acc, x) => acc + x, 0); // sum
reduce(flat, (acc, x) => acc * x, 1); // product
reduce(flat, (acc, x) => (acc > x ? acc : x), -Infinity); // max

flat.reduce((acc, x) => (acc > x ? acc : x), -Infinity);
// filter o map

flat
  .map((x) => x * x)
  .filter((x) => x > 1000)
  .reduce((acc, x) => acc + x, 0);

// flatten a 2D array using reduce and the spread (...) operator
array.reduce((flat, array) => [...flat, ...array], []);

// const merge = (array1, array2) => array1.concat(array2);
const merge = (array1, array2) => [...array1, ...array2];

// const copy = array.map((x) => x);
// const copy = [...array];
// const copy = Array.from(array);

// create a function that return a copy of the array sorted in descending order
// const copy = array.slice();
const sortd = (arr) => {
  const copy = arr.slice();
  // copy.sort((a, b) => (a < b ? +1 : a > b ? -1 : 0));
  copy.sort((a, b) => a - b);
  return copy;
};

const max = (arr) => arr.reduce((m, x) => (x > m ? x : m), arr[0]);

const square = (arr) => arr.map((x) => x * x);
const total = (arr) => arr.reduce((acc, x) => acc + x, 0);

const sumg40 = (arr) =>
  arr.filter((x) => x > 40).reduce((acc, x) => acc + x, 0);

const distinct = (arr) =>
  arr.filter((value, index, array) => index === array.indexOf(value)); // filter and indexOf
