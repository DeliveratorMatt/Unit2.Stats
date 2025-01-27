/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */

function getLength(numbers) {
  len = numbers.length;
  return len;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */

function getSum(numbers) {
  len = numbers.length;
  let sum = 0;
  let i = 0;
  while (i < len) {
    addOn = parseInt(numbers[i]);
    sum = sum + addOn;
    i += 1;
  }
  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */

function getMean(numbers) {
  const len = numbers.length;
  const total = getSum(numbers);
  const mean = total / len;
  return mean;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */

function getMin(numbers) {
  return Math.min(...numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */

function getMax(numbers) {
  return Math.max(...numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */

function getRange(numbers) {
  const range = getMax(numbers) - getMin(numbers);
  return range;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */

function getEvens(numbers) {
  const len = getLength(numbers);
  let evenNumbers = [];
  let i = 0;
  while (i < len) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
    i += 1;
  }
  return evenNumbers;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const len = getLength(numbers);
  let oddNumbers = [];
  let i = 0;
  while (i < len) {
    if (numbers[i] % 2 === 1) {
      oddNumbers.push(numbers[i]);
    }
    i += 1;
  }
  return oddNumbers;
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
