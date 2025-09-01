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

console.log(bubbleSort(arr));
