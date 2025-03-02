// [1, 2, 3, 4];
// const arr = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4, __proto__: { map: () => {} } };]

// const obj = {
//   first: "Jane",
//   last: "Doe",
//   win: () => {},
// };

// obj.__proto__ = obj2.__proto__;

// console.log(Object.entries(Array.prototype));

// const arr = [1, 2, 3];
// arr.__proto__.map = (f) => console.log(f);
// console.log(arr.map((x) => x));

import prompts from "prompt-sync";

const prompt = prompts();
// const number = prompt("How many? ");
// console.log(number);

function readStudents_() {
  let students = [];

  for (let i = 0; i < 5; i++) {
    const student = {};

    // student["name"] = prompt("Name: ");
    student.name = prompt("Name: ");
    student.gender = prompt("Gender: ");
    student.grade = Number(prompt("Grade: "));
    student.age = Number(prompt("Age: "));

    students.push(student);
  }

  return students;
}

const readStudents = () =>
  Array.from({ length: 5 }).map(() => ({
    name: prompt("Name: "),
    gender: prompt("Gender: "),
    grade: Number(prompt("Grade: ")),
    age: Number(prompt("Age: ")),
  }));

// const students = readStudents();
// console.log(students);

const students = [
  { name: "John", gender: "Male", grade: 85, age: 23 },
  { name: "Jane", gender: "Female", grade: 77, age: 31 },
  { name: "Dohn", gender: "Male", grade: 92, age: 29 },
  { name: "Fane", gender: "Female", grade: 63, age: 20 },
  { name: "Xohn", gender: "Male", grade: 54, age: 22 },
];

const youngest = students.reduce((a, b) => (a.age < b.age ? a : b), {
  age: +Infinity,
});
console.log(youngest);

const oldset = students.reduce((a, b) => (a.age > b.age ? a : b), {
  age: -Infinity,
});
console.log(oldset);

const averageAge = students.reduce((a, b) => a + b.age, 0) / students.length;
console.log(averageAge);

// const copy = students;
// const copy = array.slice();
const copy = [...students];
// const obj = {...{name: "J", age:0}, grade: 7};
// const copy = Array.from(students);

// median of the array without changing it
const median = (array) => {
  const sorted = [...array].sort((a, b) => a.age - b.age);
  const mid = Math.floor(array.length / 2);

  return array.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
};

const averageGrade =
  students.reduce((a, b) => a + b.grade, 0) / students.length;

const varianceGrade =
  students.reduce((a, b) => a + (b.grade - averageGrade) ** 2, 0) /
  students.length;

const males = students.filter((student) => student.gender === "Male");
const females = students.filter((student) => student.gender === "Female");

const sortedName = [...array].sort((a, b) =>
  a.name < b.name ? -1 : a.name < b.name ? +1 : 0
);

const sortedGradeD = [...array].sort((a, b) => b.grade - a.grade);

students
  .filter((student) => student.gender === "Female")
  .reduce((a, b) => (a.grade > b.grade ? a : b), {
    grade: -Infinity,
  });

students.filter((a) => a.grade < 60).length > 0;
students.some((a) => a.grade < 60);
students.every((a) => a.grade >= 60);

// { name: "John", gender: "Male", grade: 85, age: 23, passing: true },

// student.["passing"] = student.grade >= 60;
student.passing = student.grade >= 60;

for (const student of students) {
  student.passing = student.grade >= 60;
  // student = { ...student, passing: student.grade >= 60 };
}

const newStudents = students.map((student) => ({
  ...student,
  passing: student.grade >= 60,
  // name: "Xane Doe",
}));

// delete student.passing;
