// what difference between var let?
// var is function scoped, hoisted with undefined, allows re-declaration, and attaches to the global object.
function test() {
  if (true) {
    var a = 10;
  }
  console.log(a); // 10 (accessible outside block)
}
test()

// Note:undefiend is value.type of undefiend.
// null is also a value.and type of object.
// console.log(typeof []);
// object


// Internally JS karta hai:
var x;
console.log(x);
x = 5;

// let:let is block scoped, hoisted but in temporal dead zone, does not allow re-declaration, and does not attach to the global object.
function test1() {
  if (true) {
    let b = 20;
  }
  console.log(b); // ❌ Error (b is not defined)
}

test1()

// let → Hoisted but NOT initialized (Temporal Dead Zone)
console.log(y); // ❌ ReferenceError
let y = 5;
