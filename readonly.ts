/* We can make a field readonly on a type */

interface Cat {
  name: string;
  readonly breed: string;
}

const myCat: Cat = {
  name: "Michi",
  breed: "Tabby",
};

// I can change its name

myCat.name = "Tom";

// But typescript will complain about breed being readonly
// myCat.breed = "somethingelse";

console.log(myCat);

/* We can make a tuple to be readonly */

type readonlyCoordinate = readonly [number, number, number];

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);

// Typescript will complain that the tuple is readonly
// c1[0] = 50;

/*

We could also have written this

readonly [number, number, number]

as a type like this

type readonlyCoordinate = readonly [number, number, number];

*/

/* We can declare an array to be constant but that only means it can't be reassigned, the array itself can be modified. With typescript, we can make an array unmutable like this */

const reallyConst = [1, 2, 3] as const;

// Typescript will complain that it can't modify the array
// reallyConst[0] = 20;
