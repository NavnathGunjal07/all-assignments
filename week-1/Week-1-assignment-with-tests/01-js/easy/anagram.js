/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const map1 = new Map();
  for (let i = 0; i < str1.length; i++) {
    const c = str1[i];
    if (map1.has(c)) map1.set(c.toLowerCase(), map1.get(c) + 1);
    else map1.set(c.toLowerCase(), 1);
  }
  const map2 = new Map();
  for (let i = 0; i < str2.length; i++) {
    const c = str2[i];
    if (map2.has(c)) map2.set(c.toLowerCase(), map2.get(c) + 1);
    else map2.set(c.toLowerCase(), 1);
  }
  console.log(map1,map2)
  if(map1.size!==map2.size) return false;

  for (const key of Object.keys(map2)) {
    if (!map1.has(key) || map2.get(key) !== map1.get(key)) return false;
  }
  return true;
}

module.exports = isAnagram;
