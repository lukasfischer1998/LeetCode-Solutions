/**
 * Given a string s consisting of words and spaces,
 * return the length of the last word in the string.
 *
 * A word is a maximal substring consisting of non-space characters only.
 * Constraints:
 *  1 <= s.length <= 104
 * s consists of only English letters and spaces ' '.
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let sum = 0;
  s = s.trim(); // führende und abschließende Leerzeichen entfernen
  for (let index = s.length - 1; index >= 0; index--) {
    if (s[index] !== " ") {
      sum++;
    } else {
      break; // Schleife beenden, wenn ein Leerzeichen gefunden wird
    }
  }
  return sum;
};

// Test cases
console.log(lengthOfLastWord("Hello World")); // Expected output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Expected output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Expected output: 6
