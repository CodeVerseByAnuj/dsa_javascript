let nums1=[1,2,2,2,4];
let nums2=[3,2,2,1];

let arr=[]

let set =new Set(nums1)
console.log(set,"999")

for(let num of nums2 ){
   if(set.has(num)){
    arr.push(num)
    set.delete(num)
   }
}

console.log(arr)