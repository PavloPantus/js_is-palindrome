'use strict';

/**
 * Implement isPalindrome function:
 *
 * A palindrome is a word, phrase, or other sequence of characters which reads
 * the same backward as forward, such as 'madam' or 'racecar'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases. Empty string is a valid
 * palindrome.
 *
 *
 * isPalindrome('A man, a plan, a canal: Panama') === true
 * isPalindrome('race a car') === false
 *
 * @param {string} str
 *
 * @return {boolean}
 */
function isPalindrome(str) {
  if (str === '') {
    return true;
  }
  const strCharacters = str.match(/[a-zA-Z]/g).join('');
  const regexpForTest = new RegExp(`${strCharacters
    .split('').reverse().join('')}`, 'i');
  const regexpForTest2 = new RegExp(`${strCharacters}`, 'i');
  return regexpForTest2.test(regexpForTest);
}

module.exports = isPalindrome;
