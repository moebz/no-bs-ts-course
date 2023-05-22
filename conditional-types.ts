// Conditional types allow us to set the type based on the characteristic of another type. This is a basic example:

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

// Example 1 will be number
type Example1 = Dog extends Animal ? number : string;
 
// Example 2 will be string
type Example2 = RegExp extends Animal ? number : string;

// The documentation says that its actual usefulness comes with the use of generics.

