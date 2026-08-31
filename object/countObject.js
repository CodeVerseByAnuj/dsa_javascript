let arr = [11, 44, 2, 44, 2, 2]
let length = arr.length - 1

for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
        if (arr[j] < arr[j + 1]) {
            let temp = arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        }
    }
}

console.log(arr)