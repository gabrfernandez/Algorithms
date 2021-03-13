// 7 steps to solve DP problems
// How to recognize a DP problem
// Identify problem variables
// Clearly express the recurrence relation
// Identify the base cases
// Decide if you want to implement it iteratively or recursively
// Add memoization
// Determine time complexity

//70 Climbing Stairs
//You are climbing a staircase. It takes n steps to reach the top.
//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

//time o(n) single loop to n
//space o(n), new arr created
function climbStairs(n){
    let arr=[1,2]; //create new array

    for(let i = 2; i<n; i++){
        arr[i]=arr[i-2]+arr[i-1] // pushing new value to arr by adding two previous values
    }
    return arr[n-1]; //returning last value in array
}
climbStairs(3)//logs 3, 3 ways to climb to top
//1. 1 step + 1 step + 1 step
//2. 1 step + 2 steps
//3. 2 steps + 1 step


//322 Coin Change 
// You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount.
//  If that amount of money cannot be made up by any combination of the coins, return -1.
function coinChange(coins, amount){
    let dp = Array(amount+1).fill(Number.MAX_VALUE)
    dp[0] = 0
    for (let i=1; i<=amount; i++) {
        for (let j=0; j<coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount]

}
coinChange([1,2,5], 11) //logs 3 , 5+5+1==11
//Time complexity : O(S*n). On each step the algorithm finds the next F(i) in nn iterations, 
//where 1<= i <= S. Therefore in total the iterations are S∗n.
//Space complexity : O(S). We use extra space for the memoization table.


//300 Longest Increasing Subsequence
//Given an integer array nums, return the length of the longest strictly increasing subsequence.
//A subsequence is a sequence that can be derived from an array by deleting some or no elements 
//without changing the order of the remaining elements. 
//For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
var lengthOfLIS = function(nums) {
    const a = [];
  
    nums.forEach(function(item) {
      let index = binarySearch(a, item) + 1;
      if (a[index] === undefined)
        a[index] = item;
      else 
        a[index] = Math.min(a[index], item);
    });
  
    return a.length;
};

function binarySearch(a, target) {
    let start = 0
    let end = a.length - 1;
  
    while(start <= end) {
      let mid = Math.floor((start + end)/2);
      if (a[mid] >= target)
        end = mid - 1;
      else 
        start = mid + 1;
    }
  
    return end;
}
//time O(n log n): binary search takes log n time and it is called n times
//space O(n), dp array of size is used


// 1143 Longest Common Subsequence
//Given two strings text1 and text2, return the length of their longest common subsequence.
//A subsequence of a string is a new string generated from the original string with some 
//characters(can be none) deleted without changing the relative order of the remaining characters. 
//(eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings 
//is a subsequence that is common to both strings.
//If there is no common subsequence, return 0.
function LCS(text1, text2){
    const dp = [];
    for (let i = 0; i <= text1.length; i += 1) {
      dp.push(new Array(text2.length + 1).fill(0));
    }
    for (let i = 1; i <= text1.length; i += 1) {
      for (let j = 1; j <= text2.length; j += 1) {
        dp[i][j] = text1[i - 1] === text2[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    return dp[text1.length][text2.length];
}


