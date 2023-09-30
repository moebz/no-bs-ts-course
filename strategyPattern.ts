// This wasn't part of the course, just an example I wrote after reading about the strategy pattern.

class Shape2D {
  private id: string;
  constructor(id: string) {
    this.id = id;
  }
}

class Circle extends Shape2D {
  private radius: number;
  constructor(id: string, radius: number) {
    super(id);
    this.radius = radius;
  }
}

class Triangle extends Shape2D {
  public angle1: number;
  public angle2: number;
  public angle3: number;
  constructor(id: string, angle1: number, angle2: number, angle3: number) {
    super(id);
    this.angle1 = angle1;
    this.angle2 = angle2;
    this.angle3 = angle3;
  }
}

interface PrintingStrategy {
  printStrategy(shape: Shape2D): void;
}

class LaserCircleStrategy implements PrintingStrategy {
  printStrategy(circle: Circle) {
    console.log('Laser printer -> circle');
  }
}

class LaserTriangleStrategy implements PrintingStrategy {
  printStrategy(triangle: Triangle) {
    console.log('Laser printer -> triangle');
    console.log(triangle.angle1, triangle.angle2, triangle.angle3);
  }
}

class InkjetCircleStrategy implements PrintingStrategy {
  printStrategy(circle: Circle) {
    console.log('Inkjet printer -> circle');
  }
}

class InkjetTriangleStrategy implements PrintingStrategy {
  printStrategy(triangle: Triangle) {
    console.log('Inkjet printer -> triangle');
  }
}

class Printer {
  private printingStrategy: PrintingStrategy;

  constructor(printingStrategy: PrintingStrategy) {
    this.printingStrategy = printingStrategy;
  }

  print(shape: Shape2D) {
    this.printingStrategy.printStrategy(shape);
  }
}

const laserCircleStrategy = new LaserCircleStrategy();

const laserCirclePrinter = new Printer(laserCircleStrategy);

const circle = new Circle('asdf', 10);

// Circle laser printer, print circle

laserCirclePrinter.print(circle);

const laserTriangleStrategy = new LaserTriangleStrategy();

const laserTrianglePrinter = new Printer(laserTriangleStrategy);

const triangle = new Triangle('qwer', 10, 11, 22);

// Triangle laser printer, print triangle

laserTrianglePrinter.print(triangle);

// Just testing what happens with the wrong shape.
// Typescript doesn't complain.

laserCirclePrinter.print(triangle);

laserTrianglePrinter.print(circle);
