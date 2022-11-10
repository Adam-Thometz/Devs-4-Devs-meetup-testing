// Multiplies two numbers
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error();
  return a*b
}

// Checks to see if an array contains a certain value
function doesContain(arr, target) {
  if (typeof target !== 'number' || !Array.isArray(arr)) throw new Error();
  return arr.includes(target);
}

// Checks if a word is a palindrome eg. bob, racecar
function isPalindrome(word) {
  if (typeof word !== 'string') throw new Error();
  let start = 0;
  let end = word.length - 1;
  while (start < end) {
    if (word[start] !== word[end]) return false;
    start++;
    end--;
  }
  return true;
}

module.exports = { multiply, doesContain, isPalindrome };