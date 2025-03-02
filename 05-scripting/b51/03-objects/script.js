import promptSync from "prompt-sync";
const prompt = promptSync();

// const number = prompt("How many? ");
// console.log(number);

function readStudents() {
  // Array.from(5).forEach((i) => {});
  const students = [];
  for (let i = 0; i < 5; i++) {
    students.push({
      name: prompt("Name: "),
      gender: prompt("Gender: "),
      grade: Number(prompt("Grade: ")),
      age: Number(prompt("Age: ")),
    });
  }
  return students;
}

// const students = readStudents();

const students = [
  { name: "John", gender: "Male", grade: 85, age: 23 },
  { name: "Jane", gender: "Female", grade: 77, age: 31 },
  { name: "Dohn", gender: "Male", grade: 92, age: 29 },
  { name: "Fane", gender: "Female", grade: 63, age: 20 },
  { name: "Xohn", gender: "Male", grade: 54, age: 22 },
];

console.log(students);

const youngest = students.reduce(
  (youngest, student) => (student.age < youngest.age ? student : youngest),
  students[0]
);
console.log(youngest);

const oldest = students.reduce(
  (oldest, student) => (student.age > oldest.age ? student : oldest),
  students[0]
);
console.log(oldest);

const average =
  students.reduce((sum, student) => sum + student.age, 0) / students.length;
console.log(average);

// const copy = students.map(x => x)
// const copy = Array.from(students);
const copy = [...students];
const sorted = copy.sort((a, b) =>
  a.age < b.age ? -1 : a.age > b.age ? 1 : 0
);
const median =
  sorted.length % 2
    ? sorted[(sorted.length - 1) / 2]
    : 0.5 * (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]);
console.log(median);

const averageGrade =
  students.reduce((sum, student) => sum + student.grade, 0) / students.length;
const varianceGrade =
  students.reduce(
    (sum, student) => sum + Math.pow(student.grade - averageGrade, 2.0),
    0
  ) / students.length;

const females = students.filter((student) => student.gender === "Female");
console.log(females);
const males = students.filter((student) => student.gender === "Male");
console.log(males);

const maleAverage =
  males.reduce((sum, student) => sum + student.grade, 0) / males.length;

copy.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

copy.sort((a, b) => (a.grade > b.grade ? -1 : a.grade < b.grade ? 1 : 0));

const highest = students.reduce(
  (highest, student) => (student.grade > highest.grade ? student : highest),
  students[0]
);

const highestFemale = females.reduce(
  (highest, student) => (student.grade > highest.grade ? student : highest),
  females[0]
);

// const failing = students.filter((student) => student.grade < 60);
// failing.length !== 0;
const failing = students.some((student) => student.grade < 60);
const failing = students.every((student) => student.grade >= 60);

// { name: "John", gender: "Male", grade: 85, age: 23, passing: true },
// { name: "Xohn", gender: "Male", grade: 54, age: 22, passing: false},

const passing = students.map((student) => ({
  ...student,
  passing: student.grade >= 60,
}));

const passing = [];
students.forEach((student) =>
  passing.push({
    ...student,
    passing: student.grade >= 60,
  })
);

students.forEach((student) => (students[i].passing = students[i].grade >= 60));

// for (let i = 0; i < students.length; i++) {
//   students[i].passing = students[i].grade >= 60;
// }

const a1 = [1, 2, 3, 4];
const a2 = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
a2[0];

a.field === a[field];
