/* We can create a 'flexible' type that has a required field (name in this case) but then accepts any string key and any string value doing this */

type MyFlexibleDogInfo = {
  name: string;
} & Record<string, string>;

/* We can do the same like this */

type MyFlexibleDogInfo2 = {
  name: string;
  [key: string]: string;
};

/* We can say that it accepts numbers for values like this */

type MyFlexibleDogInfo3 = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo3 = {
  name: "LG",
  breed: "Mutt",
  age: 3,
};

interface DogInfo {
  name: string;
  age: number;
}

/* We can create a type that copies every field from the original type and makes it another type. In this example we make every field a boolean */

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

/* Here we are creating a PersonWithGetters mapping the fields from the Person type. 'Capitalize' is used to set the first letter of the property name to uppercase (name would become Name). The "& Property" according to Jack Herrington seems to be some kind of workaround because we can't write Property there. */

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type PersonWithGetters = Getters<Person>;