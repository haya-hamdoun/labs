let array = [
  [2, 3],
  [34, 89],
  [55, 101, 34],
  [34, 89, 34, 99],
];

// let flat = [];
// for (let ij of array) {
//   for (let j of ij) {
//     flat.push(j);
//   }
// }
// console.log(flat);

// const flat = array.flat(1);
// console.log(flat);

// function total(array) {
//   let sum = 0;
//   for (let i of array) {
//     sum += i;
//   }
//   return sum;
// }

// function square(array) {
//   let squares = [];
//   for (let i of array) {
//     squares.push(i * i);
//   }
//   return squares;
// }

// function map(array, f) {
//   let result = [];
//   for (let i of array) {
//     result.push(f(i));
//   }
//   return result;
// }

// map(array, (x) => x * x);

// function filter(array, p) {
//   let result = [];
//   for (let i of array) {
//     if (p(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// filter(array, (x) => x > 40);

// function reduce(array, r, bottom) {
//   let result = bottom;
//   for (let i of array) {
//     result = r(result, i);
//   }
//   return result;
// }

// sum(array, (a, b) => a + b, 0);
// product(array, (a, b) => a + b, 1);

// array
//   .map((x) => x * x)
//   .filter((x) => x > 40)
//   .reduce((a, b) => a + b, 0);

// const flatten = () =>

array = array.flat(1);
const square = (a) => a.map((x) => x * x);
console.log(square(array));
console.log(square([1, 2, 3]));

// max = (a) => Math.max(...+
// max = (a) => a.reduce((a, b) => (a > b ? a : b), a[0]);

// f(...[1,2,3,4]) -> f(1,2,3,4)
// [1,2,3] -> [1,2,3,4]
// [...[1,2,3], 4] -> [1,2,3,4]

// flatten 2D array using reduce and the spread (...) operator

let array1 = [
  [2, 3],
  [34, 89],
  [55, 101, 34],
  [34, 89, 34, 99],
];

// const r = (acc, elem) => acc
// a,b => a.concat(b)
// a,b => [...a, ...b]

const flatten = (array) => array.reduce((a, b) => [...a, ...b], []);
const flat1 = flatten(array1);
// console.log(flatten(array1));

console.log(flat1);
console.log(flat1.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)));

const sortd = (array) => array.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
console.log(sortd(flat1));

// max using reduce
console.log(flat1.reduce((a, b) => (a > b ? a : b), -Infinity));

// acc = array[0]
// for (item of array) {
//   acc = item > acc ? item : acc;
// }
// return acc

flat1.map((i) => i * i); // square

flat1.reduce((sum, item) => sum + item, 0);

flat1.reduce((sum, item) => sum + item, 0) / flat1.length;

sumg40 = (array) => flat1.filter((x) => x > 40).reduce((s, x) => s + x, 0);

// distinct
console.log(flat1.filter((x, index, array) => array.indexOf(x) === index));
console.log(
  flat1.reduce((list, x) => (list.indexOf(x) === -1 ? [...list, x] : list), [])
);
