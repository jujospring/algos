/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let l = 0
  let max = 0
  let zeroes = 0
  for (let r = 0; r < nums.length; r++) {
      if (nums[r] == 0) {
          zeroes++
      }
      while (zeroes > k) {
          if (nums[l] == 0) {
              zeroes--
          }
          l++
      }
      let window = r - l + 1
      max = Math.max(max, window)
  }
  return max
};
