//Companies look for:
//Analytic skills= thought process, how you get from not knowing to finding solution
//Coding Skills= clean code, readable
//Technical skills= know the fundamentals. Pros and Cons of solutions
//Communication skills= personality match

//Data Structures: Arrays, Stacks, queues, Linked Lists, Trees, Tries, Graphs, Hash Tables
//Algorithms: Sorting, Dynamic Programming, BFS + DFS (searching), Recursion
//Cheat sheet: Readable, Scalable(speed and time complexity)

//Given 2 arrays, create a function that let's a suer know (True/False) whether these two arrays
//contain any common items
//example:
//const array1=['a', 'b', 'c','x']
//const array2=['z','y','i']
// logs false
//----------------
const array1=['a','b','c','x'];
const array2=['z','y','x'];

//brute force, not efficient
function matchingItem(arr1,arr2){
    for(let i = 0; i<arr1.length;i++){
      for(let j =0; j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
          return true;
          break;
        }
      }
    }
    return false;
}
matchingItem(array1, array2) // Time O(a*b), Space O(1)

//loop through first array and create object where properties===items in the array
//loop through second array and check if item in second array exists on created object
const array1=['a','b','c','x'];
const array2=['z','y','x'];
function matchingItem2(arr1,arr2){
    let map = {};
    for (let i = 0; i<arr1.length;i++){
        if (!map[arr1[i]]){
            const item = arr1[i];
            map[item]= true;
        }
    }
    
    for (let j =0; j<arr2.length;j++){
        if(map[arr2[j]]){
            return true;
        }
    }
    return false;
}

matchingItem2(array1, array2) // Time O(a+b), Space O(a) since we are creating object

//using built-in JS methods to do the same, 
//check 1st array, iterate through array, if some of them include arr2, return true or false
function matchingItem3(arr1,arr2){
    return arr1.some(item=>arr2.includes(item))
}

matchingItem3(array1, array3)

//Google Question 
//given a array, find a matching pair that is equal to a given sum
// Naive
function hasPairWithSum(arr, sum){ //O(n^2)
    let len = arr.length;
    for(let i =0; i<len-1; i++){
       for(let j = i+1;j<len; j++){
          if (arr[i] + arr[j] === sum)
              return true;
       }
    }
  
    return false;
  }
  
  // Better
  function hasPairWithSum2(arr, sum){ //O(n)
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++){
      if (mySet.has(arr[i])) {
        return true;
      }
      mySet.add(sum - arr[i]);
    }
    return false;
  }
  
  hasPairWithSum2([6,4,3,2,1,7], 9)



//