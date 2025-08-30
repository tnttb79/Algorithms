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

// const fibonacciR = (n) => {
//   let resultSequence = "";
//   if(n ==1) return 0
//   return
// }
