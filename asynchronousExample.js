const printAsync = (value, ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(console.log(`printed value: ${value}`)), ms);
  });
const firstLevelPrint = async () => {
  await printAsync(1, 2000);
  await printAsync(2, 2000);
  await printAsync(3, 2000);
  console.log("after async");
};
firstLevelPrint();
console.log("main thread print");
