/* An abstract method or abstract field is one that hasn’t had an implementation provided. These members must exist inside an abstract class, which cannot be directly instantiated.

The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members. When a class doesn’t have any abstract members, it is said to be concrete. */

abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

// Typescript will complain that it can't instantiate an abstract class
// const sf = new StreetFighter();

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Hadoken";
  }
  get name(): string {
    return "Ryu"
  }
}

class ChunLi extends StreetFighter {
  getSpecialAttack(): string {
    return "Lighting Kick";
  }
  get name(): string {
    return "Chun-Li";
  }
}

const ryu = new Ryu();
const chunLi = new ChunLi();

ryu.fight();
chunLi.fight();