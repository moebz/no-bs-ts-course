/*

Mixin

It's a class that creates a new one combining simpler partial classes.

*/

/* This is a normal base class */
class Sprite {
  name = "";
  x = 0;
  y = 0;

  constructor(name: string) {
    this.name = name;
  }
}

// This is a type which we'll use to declare
// that the type being passed in is a class.

type Constructor = new (...args: any[]) => {};

// This mixin adds a scale property, with getters and setters
// for changing it with an encapsulated private property:

function Scale<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    // If I understand it correctly, this is a ES2020 private field, which it's needed because the mixin doesn't keep the private/public part of the components
    _scale = 1;

    setScale(scale: number) {
      this._scale = scale;
    }

    get scale(): number {
      return this._scale;
    }
  };
}

// Compose a new class from the Sprite class,
// with the Mixin Scale applier:
const SpriteWithScale = Scale(Sprite);

const flappySprite = new SpriteWithScale("Bird");
flappySprite.setScale(0.8);
console.log(flappySprite.scale);

/* This type allows us to create a "constrained mixin". This is a type which is similar to the one we created before that was used to check whether the passed argument is a class. This type does the same, but it is also able to check that the classs passed in has a particular characteristic */

type GConstructor<T = {}> = new (...args: any[]) => T;

/* Examples: we can create a Positionable class that must have a setPos method, a Spritable class that should be a Sprite, a Loggable class that must have a print method, etc. */

type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
type Spritable = GConstructor<Sprite>;
type Loggable = GConstructor<{ print: () => void }>;

function MakeJumpable<TBase extends Positionable>(Base: TBase) {
  return class Jumpable extends Base {
    jump() {
      // This mixin will only work if it is passed a base
      // class which has setPos defined because of the
      // Positionable constraint.
      this.setPos(0, 20);
    }
  };
}

class Point {
  id = "";
  x = 0;
  y = 0;
  constructor(id: string) {
    this.id = id;
  }
  setPos(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getPos() {
    return { x: this.x, y: this.y };
  }
}

const PointWithJump = MakeJumpable(Point);

const pwj = new PointWithJump("abc123");
pwj.setPos(7, 5);
console.log(pwj.getPos());
pwj.jump();
console.log(pwj.getPos());
