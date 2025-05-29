// reverse a string 1st attemp
const str = "hello";
function reverseString(str) {
  if (typeof str != "string" || !str || str.length < 1) {
    return "Invalid input!";
  }
  const strArr = str.split("");
  const tempArray = [];
  for (let i = 0; i < strArr.length; i++) {
    tempArray.push(strArr[strArr.length - 1 - i]);
  }
  return tempArray.join("");
}

console.log(reverseString(str));
