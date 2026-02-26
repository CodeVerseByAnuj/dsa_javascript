let arr = [3, 4, 5]
// let reveArray = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     reveArray.push(arr[i])
// }

// console.log(reveArray)

// using while loop
let i = 0;
let j = arr.length - 1;

while (i !== j) {
    arr[i]=arr[i]+arr[j];
    arr[j]=arr[i]-arr[j]
    arr[i]=arr[i]-arr[j]
    i++;
    j--;
}

console.log(arr)