let arr = [1, 2, 0]

let n = arr.length;
let r1 = n*(n+1)/2
let r2 = null;


for (let i = 0; i < n; i++) {
    r2 += arr[i];
}

let res=r1-r2;
console.log(res)