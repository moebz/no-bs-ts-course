/* We could write a class like this */
class Doggy {
  public readonly name: string = "";
  public readonly age: number = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const myDog = new Doggy("Puppy", 2);

// Typescript will complain that it is readonly
// myDog.name = "Rocky";

/* We could also write a shorter version */

class Doggy2 {
  constructor(public readonly name: string, public readonly age: number) {}
}

const myDog2 = new Doggy2("Puppy", 2);

// Again, typescript will complain that it is readonly
// myDog2.name = "Rocky";

/*

Singleton

One of the ways of implementing a singleton instance is writing a class that provides an instance of itself and a private constructor. The private constructor prevents us to write new DogList(...); so we are not able to create another instance
*/

class DogList {
  private doggies: Doggy2[] = [];
  static instance: DogList = new DogList();
  private constructor() {}

  /* We can create a method that is accessed later through the instance */

  public addDogViaInstance(dog: Doggy2) {
    console.log("adding via instance");
    this.doggies.push(dog);
  }

  /* And we can also create a method that is accessed later through the class */

  static addDogViaStatic(dog: Doggy2) {
    console.log("statically adding");
    DogList.instance.doggies.push(dog);
  }

  public getDogs() {
    return this.doggies;
  }
}

const lgg = new Doggy2("Piter", 3);
const anotherDoggy = new Doggy2("Scooby", 4);

DogList.instance.addDogViaInstance(lgg);
DogList.addDogViaStatic(anotherDoggy);

console.log(DogList.instance.getDogs());
