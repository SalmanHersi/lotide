# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @namlase/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: Takes in two arrays and prints an appropriate message to the console.
- `assertEqual`: Checks if both input and output have a perfect match.
- `head`: : Returns the element at the 0th index of the given array.
- `tail`: Returns the rest of the array after removing the element at the 0th index.
- `middle`: Returns the middle element of an array.
- `map`: Returns a new array based on the results of the callback function.
- `assertObjectsEqual`: Detects if two objects are equal.
- `countLetters`: Returns a count of each of the letters in a given sentence.
- `countOnly`: Takes in an array and an object, and returns an object containing counts of everything listed in the input object.
- `eqArrays`: Takes in two arrays and returns true or false based on a perfect match.
- `eqObjects`: Takes in two objects and returns true or false based on a perfect match.
- `findKey`: Takes in an object and a callback function, and returns the first key for which the callback returns a truthy value. If no key is found, it returns undefined.
- `findKeyByValue`: Takes in an object and a value, and returns the key associated with that value.
- `letterPositions`: Returns all the indices (zero-based positions) in a string where each character is found.
- `takeUntil`: Returns a slice of the array with elements taken from the beginning
- `without`: Returns a new array with only those elements from the source that are not present in the itemsToRemove array.
