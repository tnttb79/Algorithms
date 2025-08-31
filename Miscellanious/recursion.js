function factorialRecursive(number) {
  if (number == 1) return 1;
  return number * factorialRecursive(number - 1);
}

const factorialLoop = (number) => {
  let result = number;
  while (number !== 1) {
    result = result * (number - 1);
    number--;
  }
  return result;
};

console.log(factorialRecursive(5));
console.log(factorialLoop(5));

const fibonacciLoop = (n) => {
  let result = [];
  let current = 0;
  let next = 1;
  for (let i = 0; i <= n; i++) {
    result.push(current);
    [current, next] = [next, next + current];
  }
  return result;
};

console.log(fibonacciR(5));
