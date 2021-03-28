const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 2];

// multiply by 2
// map

const multiplyBy2 = arr.map((item) => item * 2);

// foreach
// arr.forEach((item, index) => (arr[index] = item * 2));

// console.log({ multiplyBy2 });
// console.log({ arr });

// filter out 5

const filterOut5 = arr.filter((item) => item !== 5);

// console.log({ filterOut5 });

// in Youtube video i mistakenly used odd number.
// check for Even numbers
// every

const checkEvenNumber = arr.every((item) => item % 2 === 0);

// console.log({ checkOddNumber });

// Counting the occurrences 2
// reduce

const occurrencesOf2 = arr.reduce((count, item) => {
  if (item === 2) {
    count++;
  }
  return count;
}, 0);

// console.log({ occurrencesOf2 });

// find index by value
// indexOf

const indexOf3 = arr.indexOf(2);
// console.log({ indexOf3 });

const lastIndexOf2 = arr.lastIndexOf(2);
//console.log({ lastIndexOf2 });

// includes

const includes6 = arr.includes(61);
// console.log({ includes6 });

const greaterThan6 = arr.find((item) => item > 6);
console.log({ greaterThan6 });
