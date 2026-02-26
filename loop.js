// prime number
let n = 55
let count = 0;

for (let i = 2; i * i < n; i++) {
    if (n % i === 0) {
        count++;
    }
}

if(count>0){
    console.log("not prime")
}else{
    console.log("prime")
}

// factorial
let fact=5;
let factValue=1;
for(let i=1;i<=fact;i++){
   factValue=factValue*i
}
console.log(factValue);


