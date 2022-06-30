// Try converting these functions into fat arrow functions.

function addTwoNumbers(numberA, numberB) {
  return numberA + numberB
}
// Test values
// 3, 5
// -4, 1
// 72, 31

function sayHello(personName) {
  console.log(`hello, ${personName}`)
}
// Test values
// "Steven"
// "Pearl"
// "Connie"

function areLooselyEqual(anything1, anything2) {
  return anything1 == anything2
}
// Test values
// 5, "5"
// true, 1
// [2, 3], 3

function areStrictlyEqual(anything1, anything2) {
  return anything1 === anything2
}
// Test values
// 5, "5"
// true, 1
// [2, 3], [2, 3]

function areSameType(anything1, anything2) {
  return typeof anything1 === typeof anything2
}
// Test values
// "hi", "mom"
// NaN, 1
// { age: 17 }, "age: 17"

function logPyramid(height) {
  for (let i = 0; i < height; i++) {
    let row = ''
    for (let j = 0; j <= i; j++) {
      row += 'A'
    }
    console.log(row)
  }
}
// Test values
// 3
// 7
// 15

function getAlphabetisedCopy(arrayOfStrings) {
  const newArray = [...arrayOfStrings]
  return newArray.sort()
}
// Test values
// ['f', 'a', 'q']
// ['n', 'z', 't', 'a']
// ['Feb', 'Mar', 'Apr']

function joinArrayStrings(arrayOfStrings) {
  return arrayOfStrings.join('')
}
// Test values
// ['po','ta','to']
// ['su','perb']
// ['per','sonnel']

function getRemainder(dividend, divisor) {
  return dividend % divisor
  // This is called the modulus operator.
  // It returns the remainder when dividing one number by another
}
// Test values
// 5, 2
// 25, 7
// 8, 3

function isOdd(someNumber) {
  return !!(someNumber % 2)
  // The !! is a shorthand way of forcing a value to true or false
  // In this case, true if the modulus is 1 or false if it's zero
}
// Test values
// 7
// 12
// 182

function whatsTheTime() {
  const now = new Date()
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)
}
// Test values - none

// Callbacks

// 1. Create a version of addTwoNumbers that accepts a callback to handle the sum.
// Test it with isOdd or logPyramid as the callback function

// 2. Create a version of getAlphabetisedCopy that accepts a callback to handle the resulting array.
// Test it with joinArrayStrings as the callback function. To get very fancy,
// create a version of joinArrayStrings that accepts a callback to handle the resutling string,
// and use it to call sayHello after alphabetising and joining an array into a string.