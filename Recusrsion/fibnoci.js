let n = 5;

function fib(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    n = n * fib(n - 1);
    return n
    
}

let res=fib(5);
console.log(res)