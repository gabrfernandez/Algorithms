/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
  var binarySearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    while(max>=min){
        guess=Math.floor((min+max)/2);
        if(array[guess]===targetValue){return guess;}
        else if(array[guess]<targetValue){min=guess+1;}
        else{max=guess-1;}
    }

	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = binarySearch(primes, 61);
console.log(("Found prime at index " + result));
//Program.assertEqual(doSearch(primes, 73), 20);


//Find index of minimum value in a subarray

var indexOfMinimum = function(array, startIndex) {
  // Set initial values for minValue and minIndex,
  // based on the leftmost entry in the subarray:  
  var minValue = array[startIndex];
  var minIndex = startIndex;

  // Loop over items starting with startIndex, 
  // updating minValue and minIndex as needed:
  for(var i=minIndex+1;i<array.length;i++){
      if(array[i]<minValue){
          minIndex=i;
          minValue=array[i];
      }
  }
  
  return minIndex;
}; 

var array = [18, 6, 66, 44, 9, 22, 14];   
var index = indexOfMinimum(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14], 
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array, 
//  "index" has value 4
println("The index of the minimum value of the subarray starting at index 2 is " + index + "."  );
Program.assertEqual(index, 4);
