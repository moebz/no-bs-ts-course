// Function overloading.
// We need to parse a coordinate (x and y)
// given a parameter that could be an object, a string,
// or two parameters.

interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(str: string): Coordinate;

// This is a function that covers all cases above

function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  // This type checking will run
  // in execution time.

  if (typeof arg1 === "string") {
    // Non-important details:
    //
    // - What this does is split the string
    // by the comma (,)
    // then each part split again by colon (:).
    // That's how we get the numbers from the string.
    //
    // - Remember that parseInt needs a 10 radix
    // for safety.

    // The important detail:
    //
    // It wasn't possible to write
    // coord[key] = parseInt(...);
    // because typescript complains
    // that the indexes used in the
    // Coordinate type are not allowed
    // to be just any string, but specifically
    // "x" and "y". That's why it's written like this:
    // coord[key as "x" | "y"] = parseInt(...);

    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else if (typeof arg1 === "object") {
    // During the execution time,
    // we can check with typeof that
    // the argument, even when it's passed as
    // a Coordinate, that its type is "object".

    // Cast the unknown to a Coordinate.

    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

const myCoordinate: Coordinate = { x: 66, y: 77 };

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 30 }));
console.log(parseCoordinate(myCoordinate));
console.log(parseCoordinate("x:12,y:18"));
