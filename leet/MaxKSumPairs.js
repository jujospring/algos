/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  nums.sort((a, b) => a - b)
  let l = 0
  let r = nums.length - 1
  let ans = 0
  while (l < r) {
      if (nums[l] + nums[r] > k) {
          r--
      } else if (nums[l] + nums[r] < k) {
          l++
      } else {
          ans++
          l++
          r--
      }
  }
  return ans
};
