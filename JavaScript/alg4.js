let a = true;
let b = false;

console.log(a && b); // false
console.log(a && true); // true

let c = false;
let d = true;

console.log(c && d); // false
console.log(d && true); // true

// operador logico ou (ii) com valores boolemos

let e = true;
let f = false;
let g = false;
let h = true;

console.log("Resultado de e || f: " + (e || f)); // verdadeiro
console.log("Resultado de e || f: " + (e || g)); // verdadeiro
console.log("Resultado de e || f: " + (g || f)); // falso
console.log("Resultado de e || f: " + (f || g)); // falso

let y = true;
let x = false;
let w = true;
let z = true;

console.log("Resultado de !y: " + !y); // falso
console.log("Resultado de !j: " + !x); // verdadeiro
console.log("Resultado de !z: " + !y); // falso
console.log("Resultado de !w: " + !x); // verdadeiro

