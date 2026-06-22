let str = "Anuj";

// if Asscii Value is between 65 to 90 then it is capital letter and 
// if it is between 97 to 122 then it is small letter.

for(let i=0; i<str.length; i++){
    let asciiValue = str.charCodeAt(i);
    if(asciiValue >= 65 && asciiValue <= 90){
        console.log("Capital Letter");
    } else {
        console.log("Small Letter");
    }
}