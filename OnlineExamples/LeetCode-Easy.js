//LeetCode-Easy

//Two Sum. Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
      const comp = target-nums[i];
      if (comp in map) {
        return [map[comp], i];
      }
      map[nums[i]] = i;
    }
  }

nums=[2,7,11,56];
twoSum(nums,9);

//Reverse Integer. Given a 32-bit signed integer, reverse digits of an integer.
function reverse(x) {
    const max = Math.pow(2, 31);
    let r = 0;
    while (x !== 0) {
      r = r * 10 + x % 10;
      if (r > max || r < -max) return 0;
      x = (x / 10) << 0;
    }
    
    return r;
  };
reverse(321);