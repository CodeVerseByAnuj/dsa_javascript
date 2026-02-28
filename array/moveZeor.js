let arr = [0, 1, 0, 1];
// let n = [];
// let n1 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         n.push(arr[i])
//     } else {
//         n1.push(arr[i])
//     }
// }

// console.log([...n, ...n1])

let i = 0;
let j = 0;

while (i < arr.length) {
    if (arr[i] === 0) {
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
        j++
    }
    i++
}

console.log(arr);
