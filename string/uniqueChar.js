let s = "leetcode";
let newchar = "";

let ch = s.charAt(0);

for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i)
    if (!newchar.includes(ch)) {
        newchar = newchar + ch;
    }
}
console.log(newchar)

