const array = [
  [2, 3],
  [34, 89],
  [55, 101, 34],
  [34, 89, 34, 99],
];

function flatten(array) {
  let result = [];

  for (let list of array) {
    for (let item of list) {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten(array));
console.log(array.flat(Infinity));

// array = array.flat();

function square(array) {
  let result = [];

  for (let item of array) {
    result.push(item * item);
  }

  return result;
}

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

console.log(square(flatten(array)));

function squareItem(item) {
  return item * item;
}

// let sf = (item, power) => Math.pow(item, power);

map(array, squareItem);

// map(array, (x) => x * x);
console.log(
  array
    .flat()
    .map((x) => x * x)
    .filter((x) => x > 100)
    .reduce((a, b) => a + b, 0)
);

// reduce(flatten(array), (a, b) => a + b, 0);
// reduce(flatten(array), (a, b) => a * b, 1);

// ...[1, 2, 3] -> 1, 2, 3
// f(...[1,2,3]) -> f(1,2,3)

// ...[1,2,3] -> 1,2,3
// ...1,2,3 -> [1,2,3]

// f(1) -> args = []
// f(1,2) -> args = [2]
// f(1,2,3) -> args = [2,3]

// function f(a, ...args) {

// }

// function max(...args) {

// }

// flatten a 2D array using the spread (...) operator

const flatten2 = (arr) => arr.reduce((acc, val) => [...acc, ...val], []);
const merge = (arr1, arr2) => [...arr1, ...arr2];

array.sort((a, b) => (a < b ? +1 : a > b ? -1 : 0)); // in-place

const sortd = (arr) => {
  // const copy = arr;
  // const copy = [...arr];
  // const copy = Array.from(arr);
  const copy = arr.slice();
  copy.sort((a, b) => (a < b ? +1 : a > b ? -1 : 0));
  return copy;
};

// const colors = [
//   { rgb: "#74F0B6", name: "tiffany-green" },
//   { rgb: "#010101", name: "dark-black" },
// ];

// const colors2 = [...colors]; // shalow
// // const colors2 = [{ ...colors[0] }, { ...colors[1] }]; // deep
// colors2.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? +1 : 0));

// colors2[0].rgb = "#000000";
// console.log(colors);
// console.log(colors2);

// a - b or b - a for numeric storing
// "0"
// "2"
// "11"

const max = array.reduce((a, b) => (a < b ? b : a), array[0]);
const square = array.map((x) => x * x);
const total = array.reduce((sum, val) => sum + val, 0);

const sumg40 = array.filter((x) => x > 40).reduce((sum, val) => sum + val, 0);

const distinct = array.filter(
  (x, i, a) => i === a.indexOf(x) /* false for duplicates */
); // using indexOf
