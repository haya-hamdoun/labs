// console.log("Hello, world!");
// console.error("Byebye, world!");

// alert("Alert!");

// print odd numbers between 1 and 100
// let i = 1;
// while (i <= 100) {
//   if (i % 2) {
//     console.log(i);
//   }
//   i++;
// }

// print odd numbers between 1 and 100
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 2) {
//     console.log(i);
//   }
// }

const cars = ["Toyota", "Honda", "BMW"];

// add "Volvo" to the end of cars

cars.push("Volvo");

// add "Mercedes" to the beginning of cars

cars.unshift("Mercedes");

function show(array) {
  for (let item of array) {
    console.log(item);
  }
}

console.log(cars);
show(cars);

cars.sort();
show(cars);

// function comparator(a, b) {
//   return a < b ? -1 : a > b ? 1 : 0;
// }

let comparator = function (a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};

let comparator2 = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

cars.sort(comparator);
cars.sort(comparator2);
cars.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
show(cars);
