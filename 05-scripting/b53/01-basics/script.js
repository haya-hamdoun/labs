// alert("Hello, World!");
// console.log("Hello, World!");
// console.error("Hello, World!");

// let i = 1;
// while (i <= 100) {
//   if (i % 2) {
//     console.log(i);
//   }
//   i++;
// }

// print odd numbers between 1 and 100
// for (let i = 1; i <= 100; i++) {
//   if (i % 2) {
//     console.log(i);
//   }
// }

const cars = ["Toyota", "Honda", "BMW"];
cars.push("Volvo");
cars.unshift("Mercedes");

// console.log(cars);

function show(array) {
  for (let item of array) {
    console.log(item);
  }
}
show(cars);

cars.sort();
show(cars);
