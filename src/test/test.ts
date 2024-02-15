// test.ts

import { suma, resta, multiplicacion, division } from "../mathOperations";

// Pruebas para la función suma
console.log("2 + 3 =", suma(2, 3)); // Debería imprimir 5
console.log("10 + 5 =", suma(10, 5)); // Debería imprimir 15

// Pruebas para la función resta
console.log("7 - 4 =", resta(7, 4)); // Debería imprimir 3
console.log("20 - 10 =", resta(20, 10)); // Debería imprimir 10

// Pruebas para la función multiplicacion
console.log("3 * 4 =", multiplicacion(3, 4)); // Debería imprimir 12
console.log("5 * 6 =", multiplicacion(5, 6)); // Debería imprimir 30

// Pruebas para la función division
console.log("10 / 2 =", division(10, 2)); // Debería imprimir 5
console.log("8 / 0 =", division(8, 0)); // Debería lanzar un error
