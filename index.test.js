const { multiply, doesContain, isPalindrome } = require(".")

describe('multiply function', () => {
  test('it should multiply two numbers', () => {
    expect(multiply(2, 5)).toBe(10);
  });

  test('it should throw an error if one of the inputs is not a number', () => {
    expect(() => multiply(2, 'im a number')).toThrow();
  });
});

describe('doesContain function', () => {
  const arr = [1,5,3,8,345746,467356846845];
  it('should return true if the target exists in the array', () => {
    expect(doesContain(arr, 345746)).toBe(true);
  });
  it('should return false if the target does not exist in the array', () => {
    expect(doesContain(arr, 5485698576)).toBe(false);
  });
  it('should throw an error if the target is not a number', () => {
    expect(() => doesContain(arr, 'hullo im a number')).toThrow();
  });
  it('should throw an error if arr is not an array', () => {
    expect(() => doesContain('hullo im an array', 1)).toThrow();
  });
});

describe('isPalindrome function', () => {
  it('should return true if a word is a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  })
  it('should return true if a word is one letter long', () => {
    expect(isPalindrome('a')).toBe(true);
  });
  it('should return false if a word is not a palindrome', () => {
    expect(isPalindrome('racehrtshntscar')).toBe(false);
  });
  it('should throw an error if word is not a string', () => {
    expect(() => isPalindrome(85)).toThrow();
  });
});