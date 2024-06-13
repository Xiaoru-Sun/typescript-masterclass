/* functions */
function addNumbers(a: number, b: number): number {
  return a + b;
}

const subtractTwoNumbers = (a: number, b: number): number => {
  return a - b;
};

function addAllNumbers(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
  // return total;
}
addAllNumbers([1, 2, 4, 5]);

// return type inference //

const formatGreeting = (name: string, greeting: string): string => {
  return `${greeting} ${name}`;
};

const result = formatGreeting("marios", "hello");
console.log(result);
