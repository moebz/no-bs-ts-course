let userName: string = "Jack";
let hasLoggedIn: boolean = true;

// Typescript will complain because we
// are assigning a string to a boolean.
// hasLoggedIn += " Herrington";

userName += " Herrington";

console.log(hasLoggedIn);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names = userName.split(" ");

// Typescript will complain because there is a string
// in this array of numbers.
const myValues: Array<number> = [1, 2, 3];

// Specifying the type for an object
const myPerson: {
  first: string;
  last: string;
} = {
  first: "Jack",
  last: "Herrington",
};

// Specifying the type for an object
// using interface so we can avoid
// copying and pasting the type
// definition in every person object

interface Person {
  first: string;
  last: string;
}

const myPerson2: Person = {
  first: "Jack",
  last: "Herrington",
};

// In js we usually use objects to
// create a map of keys and values.
// The problem in Typescript is that
// you can't modify an object
// after initializing it
// because typescript already set
// the type to be like
// the object's content.

const ids2 = {
  10: "a",
  20: "b",
};

// I can't modify it.
// ids2[30] = "c";

// Record allows you to create a
// modifiable map of keys and values.
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

// I can modify it (adding a key/value)
ids[30] = "c";

// I can't compare a number to a string
// if (ids[30] === 3) {
// }

// I can compare a string to a string
if (ids[30] === "d") {
}

// I can let typescript infer the i
// variable type in a for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// I can let typescript infer
// the argument v's type
[1, 2, 3].forEach((v) => console.log(v));

const result: number[] = [4, 5, 6].map((v) => v * 10);

// It will tell me when
// I try to process an array and
// the result isn't of the expected type
// const result2: number[] = [4, 5, 6].map((v) => `${v * 10}`);

