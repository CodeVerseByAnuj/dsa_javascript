// Jab JavaScript automatically ek type ko dusre type me convert karta hai, use type coercion kehte hain.
//coercion: Type coercion means JavaScript automatically converts one type to another.

// Example 1: Number + String
console.log(5 + "5");
// Number string me convert ho gaya.

// Example 2: Boolean to Number
console.log(true + 1);
// Output:2

// Example 1: Number + String
console.log(5 - "5"); // 0
console.log(5 * "5"); // 25
console.log(null + 1);     // 1
console.log(undefined + 1); // NaN
console.log([] == false);  // true