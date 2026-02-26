let day = 1;
// always match the day value
// isko jb use krte h jb value match krani ho
// jo switch kar skta h vo if else kr skta h pr jo if else kr skta h vo swich nhi kr skta it means comparision nhi kr skta a>b
switch (day) {
    case 1: {
        console.log("monday");
        break;
    } case 2: {
        console.log("tuesday");
        break;
    } default: {
        console.log("sunday")
        break;
    }
}

let ele = "apple"

switch (ele) {
    case "apple": {
        console.log("Apple");
        break;
    } case "ele": {
        console.log("abhi");
        break;
    } default: {
        console.log("rrrr")
        break;
    }
}

// this is or Case
switch (day) {
    case 1:
    case 2:
    case 3:
        {
            console.log("tuesday");
            break;
        } default: {
            console.log("sunday")
            break;
        }
}

// this is also valid.
switch(true){
    case 5>3:{
        console.log("hello")
        break
    }
}