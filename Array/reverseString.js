// reverse a string 1st attemp
const str = "hello";
function reverseString(str) {
  const strArr = str.split("");
  const tempArray = [];
  for (let i = 0; i < strArr.length; i++) {
    tempArray.push(strArr[strArr.length - 1 - i]);
  }
  return tempArray;
}

console.log(reverseString(str));
