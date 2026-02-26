let a = 5;
let b = 7;
// console.log(a,b)
// a=a+b
// b=a-b
// a=a-b

// 2nd method
[a, b] = [b, a];

console.log(a, b)


MathFunction

Math.round(4.6)   // 5
Math.floor(4.9)   // 4
Math.ceil(4.1)    // 5
Math.trunc(4.9)   // 4

// 🔥 Real Difference: Negative Numbers
Math.trunc(-4.9)   // -4
Math.floor(-4.9)   // -5

// Yaha difference samjho carefully:

// ✅ Math.trunc(x)
// Sirf decimal part hata deta hai
// Number ko zero ki taraf le jata hai
// 👉 -4.9 → -4

// ✅ Math.floor(x)
// Hamesha neeche ki taraf (downward) round karta hai
// Number ko negative infinity (−∞) ki taraf le jata hai
// 👉 -4.9 → -5

Math.pow(2, 3)   // 8
Math.sqrt(16)    // 4
Math.cbrt(27)    // 3

// 3. Random Function
Math.random()
// 0 se 1 ke beech random decimal deta hai.0 include hota hai, 1 exclude hota hai.

Math.min(2, 5, 1)  // 1
Math.max(2, 5, 1)  // 5

// abs is return the absolute value
let diff = Math.abs(a - b);  // 6
