let arr=[3,4,5]
// find 2nd max
let firstMax=arr[0];
let secoundMax=arr[0]

for(let i=0;i<arr.length;i++){
    if(firstMax<arr[i]){
      secoundMax=firstMax  
      firstMax=arr[i]
    }
}

console.log(firstMax);
console.log(secoundMax);

