const students = [{ name: "Ali", grade: 75 }, { name: "Sara", grade: 92 }, { name: "Mona", grade: 88 }];
const users = [{ name: "Malak", role: "Student" }, { name: "Omar", role: "Mentor" }];
const products = [{ id: 1, name: "Mouse" }, { id: 2, name: "Keyboard" }, { id: 3, name: "Screen" }];
const numbers = [1, 2, 3, 4, 5, 6];
const employees = [{ name: "Nour", department: "HR" }, { name: "Youssef", department: "IT" }];
const words = ["js", "ts", "js", "react", "js", "ts"];
const person = { name: "Laila", age: 21, city: "Cairo" };
const student = { name: "Hana", grade: 84, level: 2 };

const highGrades = students.filter(s => s.grade > 80);

const userLabels = users.map(u => `${u.name} - ${u.role}`);

const product3 = products.find(p => p.id === 3);

const { name, age } = person;
console.log(name, age);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];

const updatedStudent = { ...student, grade: 90 };

const doubled = numbers.map(n => n * 2);

const evens = numbers.filter(n => n % 2 === 0);

const itEmployee = employees.find(e => e.department === "IT");

const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});