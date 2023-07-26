const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const isEqual = function (arr1, arr2) {
  return JSON.stringify(arr1.sort()) == JSON.stringify(arr2.sort());
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

console.log(isEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(isEqual([1, 2, 3], [3, 2, 1])); // => false

console.log(isEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(isEqual(["1", "2", "3"], ["1", "2", 3])); // => false
