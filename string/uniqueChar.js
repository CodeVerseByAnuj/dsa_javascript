// let s = "eetcode";
// let newchar = "";

// for (let i = 0; i < s.length; i++) {
//     let ch = s.charAt(i)
//     if (!newchar.includes(ch)) {
//         newchar = newchar + ch;
//     }
// }

function str(s) {
    for (let i = 0; i < s.length; i++) {
        let count = 0;
        for (let j = i+1; j < s.length; j++) {

            if (s[i] === s[j]) {
                count++;
            }
        }

        if (count === 1) {
            return i;
        }
    }
    return -1;
}
console.log(str("leetcode"))

