/**
 * Add tow numbers
 * @param a Number one
 * @param b Number two
 * @returns  Result
 */
const add = (a: number, b: number): number => a + b;

/**
 * Substratc  two numbers
 * @param a Number one
 * @param b Number two
 * @returns  Result
 */
const substrac = (a: number, b: number): number => a - b;

/**
 * Multiply  two numbers
 * @param a Number one
 * @param b Number two
 * @returns  Result
 */
const multiply = (a: number, b: number): number => a * b;

/**
 * Division of  two numbers. If the second parameter is zero it throws an error
 * @param a Number one
 * @param b Number two
 * @returns  Result
 */
const division = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("¡No se puede dividir por cero!");
  }
  return a / b;
};

export default {
  add,
  substrac,
  multiply,
  division,
};
