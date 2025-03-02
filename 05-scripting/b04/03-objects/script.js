import promptSync from "prompt-sync";
const prompt = promptSync();
// const number = prompt("How many? ");
// console.log(number);

function readStudents2() {
  const students = [];

  // create five student objects (POJO) from user input

  for (let i = 0; i < 5; i++) {
    const name = prompt("Name: ");
    const gender = prompt("Gender: ");
    const grade = Number(prompt("Grade: "));
    const age = Number(prompt("Age: "));

    const student = { name, gender, grade, age };
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

// {
//   key1: key1, key2: key2, key3: key3;
// }

// const students = readStudents();
// console.log(students);

// [1, 2, 3, 4, 5] -> { 0: 1, 1: 2, 2: 3, 3: 4, length: 5, __proto__: {
//   map: () => ,
//   filter: () => ,
//   indexOf: () => ,
// } }

// Array.prototype

// const arr = [1, 2, 3];
// arr.map = () => console.log("Overriden!");
// arr.map();
// arr.__proto__ = null;
// console.log(arr.__proto__.map((x) => x));

const students = [
  { name: "John", gender: "Male", grade: 85, age: 23 },
  { name: "Jane", gender: "Female", grade: 77, age: 31 },
  { name: "Dohn", gender: "Male", grade: 92, age: 29 },
  { name: "Fane", gender: "Female", grade: 63, age: 20 },
  { name: "Xohn", gender: "Male", grade: 54, age: 22 },
];

console.log(Math.min(...students.map((x) => x.age)));

// const total = array.reduce((sum, val) => sum + val, 0);

const youngest = students.reduce(
  (youngest, student) => (youngest.age < student.age ? youngest : student),
  students[0] // { age: +Infinity }
);
console.log(youngest);

const oldest = students.reduce(
  (oldest, student) => (oldest.age > student.age ? oldest : student),
  students[0] // { age: +Infinity }
);
console.log(oldest);

// const insertion = array.reduce((sorted, val) => sorted.splice(index), [])

const median = (array) => {
  // const sorted = [...array].sort((s1, s2) => s1.age - s2.age);
  const sorted = array.map((s) => s.age).sort();

  // pick the middle element if odd or even
  const mid = Math.floor(array.length / 2);

  return array.length % 2 ? array[mid] : (array[mid - 1] + array[mid]) / 2;
};

const averageGrade =
  students.reduce((sum, stu) => sum + stu.grade, 0) / students.length;
const varianceGrade =
  students.reduce((sum, stu) => sum + (averageGrade - stu.grade) ** 2, 0) /
  students.length;

const males = students.filter((stu) => stu.gender === "Male");
const females = students.filter((stu) => stu.gender === "Female");

const averageMale =
  males.reduce((sum, stu) => sum + stu.grade, 0) / males.length;

// ascending by name
students.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? +1 : 0));
console.log(students);

// descending by grade
students.sort((a, b) => b.grade - a.grade);
console.log(students);

// students with failing grade?
if (students.filter((s) => s.grade < 60).length > 0) {
  // there are failing students
}

// add passing property to student objects
const students2 = students.map((s) => ({ ...s, passing: s.grade >= 60 }));

students.forEach((s) => (s.passing = s.grade >= 60));

const s2 = { ...s }; // shallow copy
// const s2 = s;
s2.key = "value";

// { name: "John", gender: "Male", grade: 85, age: 23, passing: true }
