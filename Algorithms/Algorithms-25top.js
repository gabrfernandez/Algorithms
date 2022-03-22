//top 25 algorithms

//searching 
//linear search
//Finds the first index of a given element in an array using the linear search algorithm.
const linearSearch = (arr, item) => {
  for (const i in arr) {//Use a for...in loop to iterate over the indexes of the given array.
    if (arr[i] === item) return +i;//Check if the element in the corresponding index is equal to item.
  }//If the element is found, return the index, using the unary + operator to convert it from a string to a number.
  return -1;
};
linearSearch([2, 9, 9], 9); // 1
linearSearch([2, 9, 9], 7); // -1

//binary search
//Finds the index of a given element in a sorted array using the binary search algorithm.
const binarySearch = (arr, item) => {
  let l = 0, r = arr.length - 1; //Declare the left and right search boundaries, l and r, initialized to 0 and the length of the array respectively.
  while (l <= r) { //Use a while loop to repeatedly narrow down the search subarray, using Math.floor() to cut it in half.
    const mid = Math.floor((l + r) / 2);
    const guess = arr[mid];
    if (guess === item) return mid; //Return the index of the element if found, otherwise return -1.
    if (guess > item) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
};
binarySearch([1, 2, 3, 4, 5], 1); // 0
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1

// DFS

//BFS

//Sorting 
//Insertion sort
const insertionSort=(arr)=>{
  for(let i=1;i<arr.length;i++){// Iterate from arr[1] to arr[n] over the array. 
    let key =arr[i]; //selects first unsorted element
    let j=i-1;
    //Compare the current element (key) to its predecessor (j).
    //If the key element is smaller than its predecessor, compare it to the elements before.
    // Move the greater elements one position up to make space for the swapped element.
    while(j>=0 && arr[j]>key){ //loop shifts all elemetns to right to create open position
      arr[j+1]=arr[j];
      j--;
    }
    arr[j+1]=key; //inserts the unsorted element to its correct position
  }
  return arr;
}

insertionSort([5,4,3,6,2,7,1]) //[1,2,3,4,5,6,7]

//Heap Sort 
const heapsort = arr => {
  const a = [...arr]; //clone original array
  let l = a.length; //use closure to declare l and heapify function

  const heapify = (a, i) => {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;
    if (left < l && a[left] > a[max]) max = left; //if left child > root
    if (right < l && a[right] > a[max]) max = right;//if right child> max so far
    if (max !== i) { // if max is not root
      [a[max], a[i]] = [a[i], a[max]];
      heapify(a, max); //recursively heapify the affect sub-tree
    }
  };

  for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(a, i);//build max heap from array
  for (i = a.length - 1; i > 0; i--) { //narrow down the considered range, using heapify and 
    [a[0], a[i]] = [a[i], a[0]]; //swapping values as necessary in order to sort the cloned array.
    l--;
    heapify(a, 0);
  }
  return a;
};
heapsort([6, 3, 4, 1]); // [1, 3, 4, 6]

//Selection Sort
const swap=(arr, x, y)=>{
  let temp=arr[x];
  arr[x]=arr[y];
  arr[y]=temp;
}

const selectionSort=(arr)=>{
  for(let i=0; i<arr.length; i++){
    let minIndex=i;//find min element in unsorted array
    for(let j=i+1; j<arr.length;j++){
      if(arr[j]<arr[minIndex]){
        minIndex=j;
        swap(arr, minIndex,i) // swap found min element
      }
    }
  }
  return arr;
}
selectionSort([2,5,3,6,8,6,0])

//Merge Sort

//Quick Sort

//Counting Sort

//Graphs
//Kruskal's 

//Dijkstra's 

//Bellman Ford

//Floyd Warshall

//Topological Sort

//Flood Fill

//Lee

//Arrays
//Kadane's 
//Given an array Arr[] of N integers. Find the contiguous sub-array
//(containing at least one number) which has the maximum sum and return its sum.
const maxSubArray=arr=>{
  let maxCurrent=0;
  let maxEnd=0;
  for(let i=0;i<arr.length;i++){
    maxCurrent=maxCurrent+arr[i];
    if(maxCurrent<arr[i]){
      maxCurrent=arr[i]
    }
    if (maxEnd<maxCurrent){
      maxEnd=maxCurrent;
    }
  }
  return maxEnd
}
maxSubArray([ -2, -3, 4, -1, -2, 1, 5, -3 ])
//Floyd's Cycle Detection 

//KMP
//Given a text txt[0..n-1] and a pattern pat[0..m-1], write a function search
//(char pat[], char txt[]) that prints all occurrences of pat[] in txt[]. 
//You may assume that n > m.

//Quick Select

//Boyer-More Majority Vote 
function findMajority(nums){
    var count = 0, candidate = -1;
    // Finding majority candidate
    for (var index = 0; index < nums.length; index++) {
      if (count == 0) {
        candidate = nums[index];
        count = 1;
      }
      else {
        if (nums[index] == candidate)
          count++;
        else
          count--;
      }
    }
    // Checking if majority candidate occurs more than
    // n/2 times
    for (var index = 0; index < nums.length; index++) {
      if (nums[index] == candidate)
        count++;
    }
    if (count > (nums.length / 2))
      return candidate;
    return -1;
 
    // The last for loop and the if statement step can
    // be skip if a majority element is confirmed to
    // be present in an array just return candidate
    // in that case
}
var arr = [ 1, 1, 1, 1, 2, 3, 4 ];
findMajority(arr)
 

//Basics
//Huffman Coding Compression


//Euclid's 

//Union Find



