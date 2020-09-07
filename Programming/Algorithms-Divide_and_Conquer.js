//merge and quick sorts, and binary search are examples

//Divide the original problem into smaller subproblems
//Conquer the smaller subproblems by solving them with recursive algos that return the solution. The 
//base of the recursive algo solves and returns the solution for the smallest subproblem
//Combine the solutions of subproblems into the solution for original

function binarySearchRecursive(arr, value, minIndex, maxIndex) {

    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        // Find the value of the middle of the array
        var middleIndex = Math.floor((minIndex + maxIndex) / 2 );
        currentElement = arr[middleIndex];
        
        // It's the same as the value in the middle - we can return!
        if (currentElement === value){
          return middleIndex;
        }
        // Is the value less than the value in the middle of the array
        if (currentElement < value) {
          return binarySearchRecursive(arr, value, middleIndex + 1, maxIndex);
        }
        // Is the value greater than the value in the middle of the array
        if (currentElement > value) {
          return binarySearchRecursive(arr, value, minIndex, middleIndex - 1);
        }
    }

    return false;
}

// The array with all of our numbers
var arr = [1,2,4,5,10,12,44,89,99,304];

// The value we are looking for in the array
var value = 89;

// The starting index point in the array
var minIndex = 0;

// The full size of the array
var maxIndex = arr.length - 1;

var result = binarySearchRecursive(arr, value, minIndex, maxIndex);

console.log('The index position is: ', result);
console.log('The value is: ', arr[result]);