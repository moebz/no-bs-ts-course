// This is a function that receives a string
// and a callback.
// The callback doesn't return anything.
// The function doesn't return anything either.
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// This is a function that receives an
// array of numbers and a callback.
// The callback receives a number and
// returns a number.
// The function returns an array of numbers.

export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

// For readability, we can rewrite
// the same function but this time
// the callback will be of type "MutationFunction".

type MutationFunction = (v: number) => number;

export function arrayMutate2(numbers: number[], mutate: MutationFunction) {
  return numbers.map(mutate);
}

// Then we can create a callback specifying
// MutationFunction as its type, so Typescript will
// force us to write a function that matches
// the type description
// (receives a number, returns a number)

const myMutationFunc: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate2([1, 2, 3], myMutationFunc));

// Example of a function that returns a function.
// This function creates "adder" functions.

// An "adder" function should receive a number and return a number.
export type AdderFunction = (v: number) => number;

// This is the creator function. It should return an AdderFunction.
export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

// Adder function is created and stored in
// addOne.
const addOne = createAdder(1);

// Executing addOne.
console.log(addOne(55));
