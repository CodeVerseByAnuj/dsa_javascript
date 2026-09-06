let arr = [7, 7, 4, 5, 5, 2];
let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     let count = 0
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             count++;
//         }
//         console.log(count)
//     }
//     if (count > 1) {
//         newArr.push(arr[i])
//     }
// }

// const set = new Set(newArr)

// another way using includes

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             if (!newArr.includes(arr[i])) {
//                 newArr.push(arr[i])
//             }
//             break;
//         }
//     }
// }

console.log(newArr)
