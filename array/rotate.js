let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// left rotate an array by one position
let firstElement = array[0];
// let newArray = []
// for (let i = 0; i < array.length; i++) {
//     let nextElement = array[i+1]
//     if (array.length - 2 >= i) {
//         newArray.push(nextElement)
//     } else {
//         newArray.push(firstElement)
//     }
// }

// console.log(newArray)

// for (let i = 0; i < array.length; i++) {
//     let nextElement = array[i + 1]
//     if (array.length - 2 >= i) {
//         array[i] = nextElement
//         console.log("0")
//     } else {
//         console.log("1")
//         array[i] = firstElement
//     }
// }

// right rotate an array by one position

const lastEle = array[array.length - 1]
for (let i = array.length-1; i >= 0; i--) {
    if (i === 0) {
        array[i] = lastEle;
    } else {
        array[i] = array[i - 1];
    }
}

console.log(array)