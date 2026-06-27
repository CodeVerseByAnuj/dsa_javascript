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

// Check if Property Exists
console.log("Property Exists","name" in student)
// Remove a Property
console.log("Remove a Property",delete student.age)

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

// Merge Two Objects
const obj1 = {
  a: 1,
  b: 2
};

const obj2 = {
  c: 3,
  d: 4
};

console.log({...obj,...obj2})

// Clone an Object
console.log("clone" , {...user})