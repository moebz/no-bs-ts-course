/*
Non-important details:

Given an array of objects, to pluck is to generate an array that contains the values of a key that live in each object of said array.

Important details:

- DataType represents the structure of each object contained in the array of objects.
- "KeyType extends keyof DataType" tells typescript that KeyType should be the type of the key of the array of objects.
- DataType[KeyType][] tells typescript that we will return an array of values of the key.
*/

function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "Mimi", age: 12 },
  { name: "LG", age: 13 },
];

/*
When we are typing the second argument for the pluck function and we type double quotes, typescript already knows that it should be either age or name.
*/

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

/*
In this example, we create a 'base event'.
*/

interface BaseEvent {
  time: number;
  user: string;
}

/*
We declare the possible events that we will use. The "addToCart" event is extended to include more data.
*/

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

/*
We tell typescript that we are preparing a function that will use the keys of EventMap to indicate which event we are going to send. We also tell it that the "data" argument will be a value of an event in EventMap.
*/

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

/*
When we are typing the first argument, typescript already knows we can only use addToCart or checkout, and when we write the second argument, it knows the specific keys for each event, event when they are extended.
*/

sendEvent("addToCart", {
  productID: "foo",
  quantity: 10,
  user: "moo",
  time: 10,
});

sendEvent("checkout", {
  user: "bar",
  time: 11,
});
