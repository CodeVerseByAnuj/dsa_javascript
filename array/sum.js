let nums = [2, 7, 11, 15]
let target = 9;
let newArr = []
let i=0
let j = nums.length - 1;


while(i<j){
if (target < nums[i]+nums[j]) {
    if (nums[i]+nums[j] === target) {
        console.log("1")
        newArr.push(i)
        newArr.push(j)
    }
    j--
} else {
    if (nums[i]+nums[j] === target) {
        newArr.push(i)
        newArr.push(j)
    }
    i++
}
}

console.log(newArr);