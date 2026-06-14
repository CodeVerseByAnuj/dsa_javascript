let str = "abba";

let startChar = 0;
let endChar = str.length - 1;
let isPallindrome = true;

while(startChar < endChar){
    if(str[startChar] !== str[endChar]){
        console.log("Not a pallindrome");
        isPallindrome = false;
        break;
    }
    startChar++;
    endChar--;
}

if(isPallindrome){
    console.log("It is a pallindrome");
}