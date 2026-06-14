const users = [
    { name: "Anuj", age: 22 },
    { name: "Rahul", age: 16 },
    { name: "Amit", age: 25 }
];
// let name = []

// for (let i = 0; i < users.length; i++) {
//     name.push(users[i].name)
// }

const names=users.map(user=>user.name)
console.log(names)