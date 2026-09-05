let arr = [1, 2, 2, 2, 3, 4, 4, 5];
let newArr = [1];

for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
        newArr.push(arr[i])
    }
}

console.log(newArr)

