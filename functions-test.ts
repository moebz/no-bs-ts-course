import addNumbers, {
  addStrings,
  addStringsWithDefaultParam,
  getName,
} from "./functions";

console.log(addNumbers(1, 2));
console.log(addStrings("Jack", "Sparrow"));
console.log(addStringsWithDefaultParam("Jack"));

// typescript will complain about
// not being able to assign a string to a
// variable with type number
// console.log(addNumbers(1, "jack"));

console.log(getName({ first: "Jack", last: "Herrington" }));
