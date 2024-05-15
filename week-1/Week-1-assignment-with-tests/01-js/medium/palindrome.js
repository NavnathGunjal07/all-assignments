/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let i = 0;
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  str = str.replaceAll(" ", "");
  str = str.replaceAll(",", "");
  str = str.replaceAll(".", "");
  str = str.replaceAll("!", "");
  str = str.replaceAll("?", "");
  j = str.length - 1;
  str = str.toLowerCase();
  console.log(str);
  while (i < j) {
    if (str.charAt(i) !== str.charAt(j)) {
      if (str.charAt(i) === " " || str.charAt(j) === " "){
        i++;
        j++;
        continue;
      } 
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
