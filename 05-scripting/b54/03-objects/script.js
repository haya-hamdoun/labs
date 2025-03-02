import promptSync from "prompt-sync";

const prompt = promptSync();
// const number = prompt("How many? ");
// console.log(number);

const a1 = [1, 2, 3, 4];
const a2 = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
  bark: () => console.log("bark"),
};

a2.bark();

// a2[1]
// a2["length"] <=> a1.length

function readStudents2() {
  const students = [];

  for (let i = 0; i < 5; i++) {
    const name = prompt("Name: ");
    const gender = prompt("Gender: ");
    const age = Number(prompt("Age: "));
    const grade = Number(prompt("Grade: "));

    students.push({ name, gender, age, grade });
  }

  return students;
}

const readStudents = () =>
  Array.from({ length: 5 }).map(() => ({
    name: prompt("Name: "),
    gender: prompt("Gender: "),
    age: Number(prompt("Age: ")),
    grade: Number(prompt("Grade: ")),
  }));

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
  (youngest, student) => (youngest.age <= student.age ? youngest : student),
  { age: +Infinity } // students[0]
);
console.log(youngest);

const oldest = students.reduce(
  (oldest, student) => (oldest.age >= student.age ? oldest : student),
  { age: -Infinity } // students[0]
);
console.log(oldest);

const averageAge =
  students.reduce((sum, val) => sum + val.age, 0.0) / students.length;

const copy = [...students];
copy.sort((a, b) => (a.age < b.age ? -1 : a.age > b.age ? +1 : 0));
const mid = Math.floor(students.length / 2);
const medianAge =
  students.length % 2 ? students[mid] : (students[mid - 1] + students[mid]) / 2;

// [1,2,3,4] -> 2.5
// [1,2,3,4,5] -> 3

const averageGrade =
  students.reduce((sum, val) => sum + val.grade, 0.0) / students.length;
const varianceGrade =
  students.reduce((sum, val) => sum + (val.grade - averageGrade) ** 2, 0.0) /
  students.length;

const males = students.filter((s) => s.gender === "Male");
const females = students.filter((s) => s.gender === "Female");

// sort ascending by name
[...students].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? +1 : 0));

// sort descending by grade
[...students].sort((a, b) =>
  a.grade > b.grade ? -1 : a.grade < b.grade ? +1 : 0
);

// student with the highest grade
students.reduce(
  (highest, student) => (highest.grade >= student.grade ? highest : student),
  students[0]
).name;

// female student with the highest grade
students
  .filter((s) => s.gender === "Female")
  .reduce(
    (highest, student) => (highest.grade >= student.grade ? highest : student),
    students[0]
  ).name;

// any failing, that is, grade < 60, students?

students.filter((s) => s.grade < 60).length !== 0;

// add a boolean passing property to students

students.forEach((s) => (s.passing = s.grade >= 60));
console.log(students);
