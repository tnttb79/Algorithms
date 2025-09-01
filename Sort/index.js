//buble sort:

const arr = [4, 7, 2, 9, 5, 1, 10, 3, 6, 8];

const bubbleSort = (array) => {
  let isChange = true;
  while (isChange) {
    isChange = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isChange = true;
      }
    }
  }
  return array;
};

// console.log(bubbleSort(arr));

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let smallestIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[smallestIndex] > array[j]) smallestIndex = j;
    }
    if (smallestIndex !== i)
      [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
  }
  return arr;
};
// console.log(selectionSort(arr));

const insertionSort = (array) => {
  let result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (array[i] < result[j]) {
        result.splice(j, 0, array[i]);
        break;
      }
      if (j == result.length - 1) {
        result.push(array[i]);
        break;
      }
    }
  }
  return result;
};
// console.log(insertionSort(arr));

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort1(array) {
//   const length = array.length;

//   for (let i = 1; i < length; i++) {
//     5;
//     if (array[i] < array[0]) {
//       // Move number to the first position
//       array.unshift(array.splice(i, 1)[0]);
//     } else {
//       // Find where number should go
//       for (let j = 1; j < i; j++) {
//         // if (array[i] > array[j - 1] && array[i] < array[j]) {
//         //   // Move number to the right spot
//         //   array.splice(j, 0, array.splice(i, 1)[0]);
//         // }
//         if (array[j] > array[i]) {
//           array.splice(j, 0, array.splice(i, 1)[0]);
//           break;
//         }
//       }
//     }
//   }

//   return array;
// }

// console.log(insertionSort1(numbers));
