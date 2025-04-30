// Exemplos de operadores lógicos com valores numéricos
let x = 10;
let y = 5;
let z = 0;

//Operador E (&&) com valores numéricos
let ResultadoE = (x > y) && (y > z);
console.log("Resultado de (x > y) && (y > z) " + ResultadoE); //
console.log("Resultado de (z < y) && (x > Z): " + (z < y) && (x > y));

//Operador OU (||) com valores numéricos
let ResultadoOU = (x < y) || (y > z);
console.log("Resultado de (x < y) || (y > z): " + ResultadoOU);

//Operador NÃO (!) com valores numéricos 
let ResultadoN = !(x < y);
console.log("Resultado de !(x < y): " + ResultadoN);

//Combinaçaõ de operadores lógicos com valores numéricos
let ResultadoC = ((x > y) && (y > z)) ||((x < y) &&(z > y));
console.log("Resultado de ((x > y) && (y > z)) ||((x < y) &&(z > y)): " + ResultadoC);