// We can specify which params are
// optional with the question mark

function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Sugar", "Something more");

// We can also say that a field is optional
// with the question mark

interface User {
  id: string;
  info?: {
    email?: string;
  };
}



function getEmail(user: User): string {
  if (user.info) {

    // If I write it like this, 
    // typescript will complain that email
    // can be undefined and not compatible
    // with the function signature that
    // says it will return a string.
    // return user.info.email;

    // If I know for sure that the email
    // field won't be undefined, I can
    // bypass the typescript error with
    // the exclamation mark. It isn't a
    // recommended practice. I could have
    // checked that email is defined before
    // returning it.
    return user.info.email!;
  }
  return "";
}

// In this example, I check every field level
// and then if it isn't defined, return an
// empty string.

function getEmailShorter(user: User): string {
  return user?.info?.email ?? "";
}
