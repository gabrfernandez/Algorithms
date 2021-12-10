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

//Heap Sort 

//Selection Sort

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

//Floyd's Cycle Detection 

//KMP

//Quick Sort

//Boyer-More Majority Vote 

//Basics
//Huffman Coding Compression

//Euclid's 

//Union Find



