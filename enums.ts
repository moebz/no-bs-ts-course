/*
Enums are for keeping a list of discrete values (meaning for example: only this values are allowed for the LoadingState)

We can omit writing a value for every "key" like this:

enum LoadingState {
  beforeLoad,
  loading,
  loaded,
}

but in that case, typescript will assign an integer based on its position, something that could make it harder to debug later.
*/

enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

/*
While writing LoadingState. ... typescript will hint the allowed values.
*/
const englishLoadingStates = {
  [LoadingState.beforeLoad]: "Before Load",
};

/* Non-important detail: this example isn't something useful, it just checks if the string passed is equal to the loading state stored in the enum */
const isLoading = (state: string) => state === LoadingState.loading;

/*
We can use literal types to allow only those values. In rollDice we allow only 1, 2 or 3.

This function adds values of throwing a number of dices set by the dice parameter (1, 2 or 3).
*/

function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
}

console.log(rollDice(2));

/* In this example we use literals to restrict the events to addToCart or checkout, and additionally, if the event is addToCart, expect a particular type of data, and another type of data in the checkout event */

function sendEvent(
  name: "addToCart",
  data: {
    productId: number;
  }
): void;
function sendEvent(
  name: "checkout",
  data: {
    cartCount: number;
  }
): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

// Typescript will complain because there is not such event
// sendEvent("something", { something: 5 });

// Typescript will complain because the data doesn't match the event
// sendEvent("checkout", { productId: 2 });

sendEvent("addToCart", { productId: 131123 });
sendEvent("checkout", { cartCount: 2 });
