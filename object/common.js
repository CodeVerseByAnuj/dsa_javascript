const user = {
  name: "Anuj",
  age: 25,
  city: "Noida"
};

// Time Complexity
// Access → O(1)
// Insert → O(1)
// Delete → O(1)
console.log(user.name)
// another apporach show the age only allow type of the number
console.log(user["age"])

// Count Number of Properties
const obj = {
  a: 10,
  b: 20,
  c: 30
};

console.log(Object.keys(obj).length)

//Iterate Over an Object
const student = {
  name: "Anuj",
  age: 25,
  city: "Delhi"
};

for (let stu in student) {
  console.log(student[stu])
}

// Sum All Values
const marks = {
  math: 80,
  english: 90,
  science: 70
};
let sum = 0
for (let mark in marks) {
  sum = sum + marks[mark]
}
console.log(sum)