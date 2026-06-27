const user = {
  name: "Anuj",
  age: 25
};

console.log(Object.entries(user))

const arr = [
  ["name", "Anuj"],
  ["age", 25]
];

const obj = Object.fromEntries(arr);
console.log(obj)