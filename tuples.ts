/*
Non-important details:
 
simpleStringState mimicks the way the useState hook works in React. (I don't actually know if it works exactly because of the same principles). This function can store the value of val because javascript can remember the context of the function, which is called a closure. That's also the reason why javascript can remember both states set with it, not only one of them.

Important detail:

This function returns a tuple with this type
[() => string, (v: string) => void]
That means typescript will force you to return an array
with the same types declared for the tuple (0 has to be () => string , and 1 has to be (v: string) => void).
*/
function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let val: string = initial;
  return [
    () => val,
    (v: string) => {
      val = v;
    },
  ];
}

const [getGreeting, setGreeting] = simpleStringState("hello");
const [getFirstName, setFirstName] = simpleStringState("jack");

console.log(getGreeting());
console.log(getFirstName());
setFirstName("john");
console.log(getGreeting());
console.log(getFirstName());
