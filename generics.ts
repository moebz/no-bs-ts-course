/*
Generics allow us to set a type "placeholder" so our function can work with any type specified afterwards.

The simpleStringState function in the tuples.ts file only works with strings.

With generics, we can make it work with any type as seen in the simpleState example here.
*/
function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

// In this example, typescript assumes
// that the generic type should be replaced with number.

const [getAge, setAge] = simpleState(55);
console.log(getAge());
setAge(38);
console.log(getAge());

/*
In this example we can't write this:

const [getName, setName] = simpleState(null);

and then try to set a string like this:

setName("john");

because typescript is assuming that our generic type should be replaced with null, and then it says that a string can't be assigned to null.

That's why the solution is to set the generic type explicitly like this:

const [getName, setName] = simpleState<string | null>(null);
*/

const [getName, setName] = simpleState<string | null>(null);
console.log(getName());
setName("john");
console.log(getName());

/*
Non-important details:

This function is a challenge of writing a function that does the same thing as the map function but using reduce. The additional challenge is to make it type safe with typescript. Reduce will take as the first accumulator an empty array of K's, apply the transformation function "mapFunc" to the current item, and add it to the array of K's, and repeat the process but now with the array of K's containing the first mapped element. It will repeat the process until the end of the original array. That's what expected of a mapping function.

Important detail:
We can specify multiple generic types as seen on the function name.
*/
function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

/*
Here we map numbers to strings, while also multiplying the original value
*/
console.log(myMap([1, 2, 3, 4], (v) => (v * 10).toString()));
