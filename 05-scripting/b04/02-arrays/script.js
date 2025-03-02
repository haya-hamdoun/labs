const array = [
  [2, 3],
  [34, 89],
  [55, 101, 34],
  [34, 89, 34, 99],
];

// const array = {
//   0: { 0: 2, 1: 3 },
//   1: [34, 89],
//   2: [55, 101, 34],
//   3: [34, 89, 34, 99],
// };

function flatten2(array) {
  let result = [];

  for (let sublist of array) {
    for (let item of sublist) {
      result.push(item);
    }
  }

  return result;
}

function square2(array) {
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

// array = flatten(array); // can't assign to constant variable

// array.flat(Infinity);

console.log(flatten2(array));

console.log(square2(flatten2(array)));

console.log(map(flatten2(array), (x) => x * x));
console.log(map(flatten2(array), (x) => Math.sqrt(x)));

console.log(
  reduce(
    filter(
      map(flatten2(array), (x) => x * x),
      (x) => x > 100
    ),
    (a, b) => a + b,
    0
  )
);

array
  .flat()
  .map((x) => x * x)
  .filter((x) => x > 100)
  .reduce((a, b) => a + b, 0);

// let min = (array) => Math.min(...array);

// ...[1, 2, 3] -> 1, 2, 3
// ...(1, 2, 3) -> [1, 2, 3]

// a, ...(b, c, d) => a, [b, c, d]

// function (a, ...args) {
//   args[0]
//   args[1]
// }

// let list = [1, 2, 3];
// list.push(4);
// list = [...list, 4];

// [...[1,2,3], 4] -> [1,2,3,4]

let flatten = (array) => array.reduce;
let max = (array) => array.reduce((a, b) => (a > b ? a : b), array[0]);
let min = (array) => array.reduce((a, b) => (a < b ? a : b), array[0]);
let total = (array) => array.reduce((a, b) => a + b, 0);
let product = (array) => array.reduce((a, b) => a * b, 1);

function average(array) {
  return total(array) / array.length;
}

let distinct = (array) => array.filter((x, i, a) => a.indexOf(x) === i);

// for (let i = 0; i < array.length; i++) {
//   for (let j = i - 1; j >= 0; j--) {
//     if (array[i] === array[j]) {
//       // i is duplicate
//     }
//   }
// }

// array.map((x) => <td>{x.cost}</td>);

// [1, 2, 1, 2]

// 1 -> 0, indexOf: 0
// 2 -> 1, indexOf: 1
// 1 -> 2, indexOf: 0
// 2 -> 3, indexOf: 1

// [1, 2]

// ...[1,2,3] -> 1,2,3 // spread
// ...1,2,3 -> [1,2,3] // rest

// function f(a, ...args, b) {
//   args[0]
//   args[1]
// }

// function max(...arr) {

// }

// flatten a 2D array using the reduce and the spread (...) operator

console.log(array.reduce((acc, val) => [...acc, ...val], []));

// [...acc, ...val] -> acc.concat(val) -> acc + val

// merge using the spread operator
const merge = (arr1, arr2) => [...arr1, ...arr2];

const copy = Array.from(array);
// const copy = [...array];
// const copy = array.slice();

const sortd = (arr) => {
  const result = Array.from(arr);
  result.sort((a, b) => (a > b ? -1 : a < b ? +1 : 0));
  // result.sort((a, b) => a - b);
  // result.sort((a, b) => b - a);
  return result;
};

// "2", "11", "3";
// "11", "2", "3";
