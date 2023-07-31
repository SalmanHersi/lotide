// const assertArraysEqual = function (array1, array2) {
//   let result = eqArrays(array1, array2);

//   if (result) {
//     console.log(`✅✅✅  Arrays are equal: [${array1}] === [${array2}]`);
//   } else {
//     console.log(`🔴🔴🔴  Arrays are not equal: [${array1}] !== [${array2}]`);
//   }
// };

// const eqArrays = function (array1, array2) {
//   if (array1 === null && array2 === null) {
//     return true;
//   }
//   if (array1 === undefined || array2 === undefined) {
//     if (array1 === array2) {
//       return true;
//     }
//     return false;
//   }

//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }

//   return true;
// };

const middle = function (array) {
  if (array.length <= 2) {
    console.log("This array is too small");
    return [];
  } else if (array.length % 2 === 1) {
    const middleIndex = Math.floor(array.length / 2);
    return [array[middleIndex]];
  } else {
    // For even-length arrays
    const middleIndex = array.length / 2 - 1;
    return [array[middleIndex], array[middleIndex + 1]];
  }
};

// assertArraysEqual(middleArray([1]), []);
// assertArraysEqual(middleArray([1, 2]), []);
// assertArraysEqual(middleArray([1, 2, 3]));
module.exports = middle;
