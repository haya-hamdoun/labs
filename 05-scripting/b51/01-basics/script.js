// alert("Hey, again!");
// console.log("Hey, again!");
// console.error("Hey, error.");

// print odd numbers between 1 and 100
// let i = 1;
// while (i <= 100) {
//   if (i % 2) {
//     console.log(i);
//   }
//   i++;
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 2) {
//     console.log(i);
//   }
// }

const cars = ["Toyota", "Honda", "BMW"];
cars.push("Volvo");
cars.unshift("Mercedes");

// console.log(cars);

cars.sort();

function show(array) {
  for (let item of array) {
    console.log(item);
  }
}

show(cars);
