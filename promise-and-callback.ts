/* This example uses a 'pokemon api' to request pokemons */

// This is like axios
import fetch from "cross-fetch";

type Pokemon = {
  name: string;
  url: string;
};

// The api response has this fields. We only care about the results.
interface PokeApiResult {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
}

// This signature allows us to receive the url, request the pokemons and then execute a callback
function fetchPokemon(url: string, cb: (data: PokeApiResult) => void): void;
// This signature allows us to receive the url, request the pokemons and then return a promise
function fetchPokemon(url: string): Promise<PokeApiResult>;
function fetchPokemon(
  url: string,
  cb?: (data: PokeApiResult) => void
): unknown {
  if (!cb) {
    return fetch(url).then((data) => data.json());
  }

  fetch(url)
    .then((data) => {
      console.log("rawData", data);
      return data.json();
    })
    .then((data) => {
      console.log("jsonData", data);
      cb(data);
    });
  return;
}

// We can execute the function with a callback

// fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
//   data.results.forEach(({ name }) => console.log(name));
// });

// Or we can execute the function awaiting it

(async function () {
  const data = await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10");
  data.results.forEach(({ name }) => console.log(name));
})();
