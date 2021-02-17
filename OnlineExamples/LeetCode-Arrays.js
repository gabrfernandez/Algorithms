//Array problems
//Two Sum. Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//o(n) time by iterating over nums array only once
//0(n) space as created hash map 
//added memory (hash map) to go faster
function twoSum(nums, target) {
    const map = {}; // initialize empty has map  
    for (let i = 0; i < nums.length; i++) { // iterate over elements of given array
      const comp = target-nums[i];
      if (comp in map) { // check if element's complement exist in map
        return [map[comp], i]; //if yes, return indices of complement and current element
      }
      map[nums[i]] = i; // if not, push element into map. key is value element, value is index
    }
  }

nums=[2,7,11,56];
twoSum(nums,9); // logs [0,1]

//Best time to buy and sell stock
//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a 
//different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//time is o(n) as single pass is needed
//space is o(1) only two variables are used
function maxProfit(prices){
  let minPrice= prices[0];
  let maxProfit=0;
  for (let price of prices){
    if(price< minPrice){ // if current price is less, set that is new min
      minPrice=price;
    }else if(price-minPrice>maxProfit){// if difference between price and min is greater than profit, set new profit
      maxProfit=price-minPrice;
    }
  }
  return maxProfit;
}
prices=[7,1,5,3,6,4];
maxProfit(prices); //logs 5 , as buy at 1 and sell at 6

//contains duplicate
//Given an array of integers, find if the array contains any duplicates.
//Your function should return true if any value appears at least twice in the array, 
//and it should return false if every element is distinct

//time o(n) as we iterate through arr 
//space o(n) was we create a new set
function containsDuplicate(arr){
  let mySet = new Set();
  for (let num of arr){
    if(!mySet.has(num)){
      mySet.add(num)
    }else{
      return true;
    }
  }
  return false;
}
arr=[1,2,3,1]
containsDuplicate(arr); //logs true


//Product of array except self
//Given an array nums of n integers where n > 1,  return an array output such that 
//output[i] is equal to the product of all the elements of nums except nums[i]
function productExceptSelf(nums){
  let output = new Array(nums.length).fill(nums[0]); //array to be returned
  let cacheVar= nums[nums.length-1];

  for(let i =1; i<nums.length;i++){
    output[i]=output[i-1]*nums[i];
  }

  output[nums.length-1]=output[output.length-2];
  for(let j=nums.length-2; j>0; j--){
    output[j]=output[j-1]*cacheVar;
    cacheVar=cacheVar*nums[j];
  }
  output[0]=cacheVar
  return output
}
productExceptSelf([1,2,3,4]) // [24,12,8,6]


//Maximum subarray
//Given an integer array nums, find the contiguous subarray (containing at least one number) 
//which has the largest sum and return its sum.
function maxSubarray(nums){
  let solution=nums[0];
  for(let i =1; i< nums.length; i++){
    nums[i]=Math.max(nums[i], nums[i]+nums[i-1])
    solution=Math.max(solution, nums[i])
  }
  return solution;
}
maxSubarray([-2,1,-3,4,-1,2,1,-5,4])//6, [4,-1,2,1] has the largest sum = 6.


//Maximum Product Subarray
//Given an integer array nums, find the contiguous subarray within an array (containing at least one number) 
//which has the largest product.
function maxProduct(nums){
  let max= nums[0];
  let min=nums[0];
  let result=nums[0];

  for(let i=1; i<nums.length;i++){
    max *=nums[i];
    min *=nums[i];
    //if nums[i] is negative, swap max and min
    if(nums[i]<0){
      let temp= max; 
      max= min; 
      min=temp
    }
    //continue previous optimal subarray or start new one
    max=Math.max(max, nums[i]);
    min=Math.min(min, nums[i]);
    result=Math.max(result, max);
  }
  return result;
}
maxProduct([2,3,-2,4])// 6, [2,3] has largest product 6


//Find Minimum in Rotated Sorted Array
//Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
//Given the sorted rotated array nums, return the minimum element of this array.

function findMinBrute(arr){
  for(let i=0; i<arr.length;i++){
    if(arr[i+1]<arr[i]){
      return arr[i+1]
    }
  }
}
findMinBrute([3,4,5,1,2])// logs 1, o(n)

//time, same as binary search O(log N)
//space:o(1)
function findMinBinary(arr){
  let left=0; 
  let right=arr.length-1;
  //if last element is bigger than first, there is no rotation
  if(arr[right]>arr[0]){
    return arr[0];
  }
  //binary search way
  while(right>=left){
    //find mid element
    let mid=left+(right-left)/2
    //finding inflection point
    if(arr[mid]>arr[mid+1]){
      return arr[mid+1];
      //if mid element is lss than previous element, then mid is the smallest. 
    }else if(arr[mid-1]>arr[mid]){
      return arr[mid];
      //if mid element is greater than 0th element, smallest values is somewhere
      //to right, so reassign left
    }else if(arr[mid]>arr[0]){
      left=mid +1;
      //if arr[0] if greater than mid, the smallest value is to left, so reassign right
    }else{
      right=mid-1;
    }
  }
}
findMinBinary([3,4,5,1,2])//logs 1


//Search in Rotated Sorted Array
//Given the array nums after the rotation and an integer target, return the index of 
//target if it is in nums, or -1 if it is not in nums. Must be O(log N) time
function search(nums, target){
  let left=0; 
  let right= nums.length-1;

  while(left<=right){
    let mid=Math.floor((left+right)/2);
    if(nums[mid]===target){
      return mid;
    }else if(nums[left]<= nums[mid]){//determine which segment is sorted
      if(nums[left]<=target && target<= nums[mid]){
        right=mid-1
      }else{
        left=mid+1
      }
    }else{
      if(nums[mid]<=target && target <=nums[right]){
        left=mid+1
      }else{
        right=mid-1
      }
    }
  }
  return -1; 
}
search(nums=[4,5,6,7,0,1,2], target=0);//logs 4

//3Sum
//Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
//Find all unique triplets in the array which gives the sum of zero.
//Notice that the solution set must not contain duplicate triplets.

//space o(1), time o(n^2)
function threeSum(nums){
  let solution=[];

  if(nums.length<3){//if nums less than 3, return empty array
    return solution
  }

  nums.sort((a,b)=> a-b) //sort first

  for(let i=0; i<nums.length; i++){
    if(nums[i]>0){
      break
    }

    if(i>0 && nums[i]===nums[i-1]){
      continue
    }
    let start=i+1; 
    let end= nums.length-1;

    while(start<end){
      const sum=nums[i]+nums[start]+nums[end];
      if(sum===0){
        solution.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
        while(start<end && nums[start]===nums[start-1]){
          start++;
        }
        while(start<end && nums[end]===nums[end+1]){
          end--;
        }
      }else if(sum<0){
        start++; 
      }else if(sum>0){
        end--;
      }
    }
  }
  return solution
}
threeSum([-1,0,1,2,-1,-4]) //[ [ -1, -1, 2 ], [ -1, 0, 1 ] ]


//Container with most water
//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate 
//(i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) 
//and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the 
//container contains the most water.
//Notice that you may not slant the container.

//brute force o(n^2)
function maxAreaBrute(height){
  let max=0; 
  for(let i =0; i<height.length-1; i++){
    for(let j=i+1; j<height.length; j++){
      max= Math.max(max, (j-1)*Math.min(height[i], height[j]))
    }
  }
  return max;
}
maxAreaBrute([1,8,6,2,5,4,8,3,7]);//49

//two cursors
//o(n)
function maxArea(height){
  let max=0;
  let i=0; 
  let j=height.length-1;

  while(i<j){
    max= Math.max(max, (j-1)*Math.min(height[i], height[j]))

    //try to move cursors
    if(height[i]<height[j]){
      //move i to next bigger border
      let k=i+1;
      while(height[k]<=height[i]){
        k++;
      }
      i=k
    }else{
      let k=j-1;
      while(height[k]<=height[j]){
        k--;
      }
      j=k;
    }
  }

  return max;
}
maxArea([1,8,6,2,5,4,8,3,7]);//49

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