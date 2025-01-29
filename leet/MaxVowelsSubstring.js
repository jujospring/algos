/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let sum = 0
  let max = 0
  for (let i = 0; i < k; i++) {
      if (vowels.includes(s[i]))  {
          sum++          
      }
      max = sum
  }
  
  for (let i = k; i < s.length; i++) {
      if (vowels.includes(s[i]))  {
          sum++           
      }
      if (vowels.includes(s[i - k]))  {
          sum--
      }
      if (sum > max) {
          max = sum
      }
  }
  return max
};
