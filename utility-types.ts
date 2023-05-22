interface MyUser {
  name: string;
  id: number;
  email?: string;
}

/*
Partial allows us to create a new type that makes every field of the original type optional. We could have copied and pasted MyUser and manually set every field to optional with a question mark, but in that case if MyUser changed, we would have to change the optional type as well.
*/

type MyUserOptionals = Partial<MyUser>;

/*
Basically, we are writing a function that can merge an existing user changing any field we want.
*/

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Jack",
      id: 2,
      email: "dontemail@dontemail.com",
    },
    {
      email: "dontemailbaz@dontemail.com",
    }
  )
);

/* "Required" allows us to create a new type that makes every field of the original type required */

type RequiredMyUser = Required<MyUser>;

/* Pick allows us to create a new type that contains a subset of fields from the original type */

type JustEmailAndName = Pick<MyUser, "email" | "name">;

/* Omit lets us create a new type without some fields of the original type. Note that in the function we have to omit the field manually, this only creates a new type and nothing else. */

type UserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  /* I would have written the solution like this because I don't like using reduce if it isn't needed. */
  // let result: Record<MyUser["id"], UserWithoutID> = {};
  // users.forEach((v) => {
  //   const { id, ...other } = v;
  //   result[`${id}`] = other;
  // });
  // return result;

  return users.reduce((a, v) => {
    // We manually omit the ID.
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 1,
      name: "Mr. Foo",
    },
    {
      id: 2,
      name: "Mrs. Baz",
    },
  ])
);

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

// Typescript will complain that the field is read only.
// todo.title = "Hello";
