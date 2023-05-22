function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string): string =>
  `${str1} ${str2}`;

export const addStringsWithDefaultParam = (
  str1: string,
  str2: string = "defaultsecondstring"
): string => `${str1} ${str2}`;

// "string | number" is a "union type". It allows string and number.
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

// void means that the function doesn't return anything
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// specifying that this function returns a promise
// that in turn returns a string
export const fetchData = (url: string): Promise<string> => {
  return Promise.resolve(`Data from ${url}`);
};

// receive any number of parameters as an array
export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

export function getName(user: { first: string; last: string }): string {
  return `${user.first} ${user.last}`;
}
