// mathOperations.ts

// Función para sumar dos números
export function suma(a: number, b: number): number {
  return a + b;
}

// Función para restar dos números
export function resta(a: number, b: number): number {
  return a - b;
}

// Función para multiplicar dos números
export function multiplicacion(a: number, b: number): number {
  return a * b;
}

// Función para dividir dos números
export function division(a: number, b: number): number {
  if (b === 0) {
    throw new Error("¡No se puede dividir por cero!");
  }
  return a / b;
}
