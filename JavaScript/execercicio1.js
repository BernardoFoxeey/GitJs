// operador && (E)
let a = true;
let b = false;

console.log(a && b); // false
console.log(a && true); // true
console.log(b && false); // false
console.log( a && (b || true));// true
console.log("\n")

let x = false;
let y = true;
console.log(x || y); // true
console.log(x || false); //false
console.log(y || false); // true
console.log(x || (y && false)); // false
console.log("\n")

let z = true;
console.log(!z); // false
console.log(!false); // true
console.log(!(z && false)); //true 
console.log(!z || false); // false
console.log("\n")

let ab = true;
let bc = false;
let c = true;
console.log(ab && bc || c); // true
console.log((ab || bc) && !c); // false
console.log(!(ab && bc) || (c && !bc)); // true 
console.log(ab && (b || c) && !bc); // true
console.log("\n")

let e = 10;
let d = 20;
let f = 15;

let ResultadoE = (d > e) && (e > d);
console.log("Resultado de (d > e) && (e > d) " + ResultadoE); // false
console.log("Resultado de (f < d) && (f > e): " + (z < y) && (x > y));

let ResultadoOU = (x < y) || (y > z);
console.log("Resultado de (e < d) || (d > f): " + ResultadoOU); // true

let ResultadoN = !(x < y);
console.log("Resultado de !(e < d): " + ResultadoN); // false

let ResultadoC = ((x > y) && (y > z)) ||((x < y) &&(z > y));
console.log("Resultado de ((e > d) && (d > f)) ||((e < d) &&(f > d)): " + ResultadoC); // false