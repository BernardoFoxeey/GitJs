let ab = true;
let bc = false;

//Operador E (&&)
let eResultado = ab && bc;
console.log("Resultado de ab && bc: " + eResultado); // 

// Operador OU (||)
let ouResultado = ab || bc ;
console.log("\nResultado de a || b:" + ouResultado);

// Operador NÃO (!)
let naoResultado = !ab;
console.log("Resultado de !ab: " + naoResultado);
//Combinação de operadores lógicos
let combinados =(ab && !bc) || (!ab && bc);
console.log("Resultado da combinacao = " + combinados)

                      