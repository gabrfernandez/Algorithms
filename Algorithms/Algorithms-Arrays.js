//Algorithms-Arrays

//insert value at the beginning of an array, not using unshift()
function insertBegin(arr,val){
    for(let i=arr.length;i>=0;i--){
      arr[i]=arr[i-1];//shifting previous element to new position
    }
    arr[0]=val;
    return arr;
  }
insertBegin([0,1,2,3],-1) //[-1,0,1,2,3]

//delete value at beginning of an array, not using shift()
function removeBegin(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i+1] //shift all elements to the left
    }
    return arr.reIndex(arr)
}

function reIndex(arr){
    const newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== undefined){// not including the undefined elements
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

removeBegin([0,1,2,3,4]) //[1,2,3,4]

//removing elements in a specific position 
myArray=[1,2,3,4,5,6,7,8,9];
myArray.splice(5,3) //(starting index, # of elements delete) log[6,7,8]
console.log(myArray); //[1,2,3,4,5,9]

//adding elements in a specific position
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // index, # of element you want to delete, insertionElement1, insertElement2
console.log(fruits) //[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]



//remove duplicated elements in a sorted array
function removeDuplicates(arr){
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]!==arr[i+1]){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(removeDuplicates([1,1,2,2,4,5,6])) //log [1,2,4,5,6]

//removed duplicated elements in a unsorted array;
function removeDuplicatesUnsorted(arr){
    var dict={};
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        if(dict[arr[i]]==undefined){
            dict[arr[i]]=1;
            newarr.push(arr[i]);
        }
    }
    return newarr
}
console.log(removeDuplicatesUnsorted([1,4,7,4,8,7])); //log [ 1, 4, 7, 8 ]

//takes in an array of numbers, returns a boolean, is there a point between indices where the summed of values on each side are equal
function balancePoint(arr){
    var firstSum=0; //left side sum
    var secondSum=0; //right side sum
    for(var i=0;i<arr.length;i++){
        firstSum+=arr[i];
        for(var j=i+1;j<arr.length;j++){
            secondSum+=arr[j];
        }
        if(first==secondSum){
            return true;
        }
    }
    return false;
}
console.log(balancePoint([1,2,3,4])); //false
console.log(balancePoint([3,4,2,5])); //true

//find the index of an array where the sum of integers to the left and right side are equal
function balanceIndex(arr){
    for(var i=1;i<arr.length;i++){//iterate through entire array 
        var leftsum=0;
        var rightsum=0;
        for (var j=0;j<=i-1;j++){//iterate for left side
            leftsum+=arr[j];
        }
        for(var k=i+1;k<arr.length;k++){//iterate for right side
            rightsum+=arr[k];
        }
        if (leftsum===rightsum){//if equal
            return i;
        }
    }
    return -1;
}
console.log(balanceIndex([-2,5,7,0,3])); //logs 2
console.log(balanceIndex([9,9]));// logs -1

//takes in two equal-length arrays, returns an object, with the elements from the first as keys and te elements from the second as values
function zipArraysIntoMap(arr1, arr2){
    var newobj={};
    for(var i=0; i<arr1.length;i++){
        newobj[arr1[i]]=arr2[i];
    }
    return newobj;
}
console.log(zipArraysIntoMap(['some', 'thing'], ['other', 'stuff']));// should log { some: 'other', thing: 'stuff' }

//given array of numbers, if numbers are consecutive group using dash -
function bookIndex(arr){
    var str='';//initialize empty string
    var first=arr[0];//
    var last=arr[0];
    for(var i=0;i<arr.length;i++){//iterate entire array
        if(arr[i]+1==arr[i+1]){//
            last=arr[i]+1;
        }else if (first==last){
            str+=first+",";
            first=arr[i+1];
        }else{
            str+= first+"-"+last+",";
            first=arr[i+1];
        }
    }
    var newstr=str.slice(0,-1);//-1 to remove trailing comma
    return newstr;
}
console.log(bookIndex([1,2,3,5,6,7,10,11]));
console.log(bookIndex([5,10,11,12]))


//takes in a sorted array and a search value, returns a boolean. 
function binarySearch(arr, val){
    var startIndex=0;
    var endIndex=arr.length-1;
    while(startIndex<=endIndex){
        var pointer=Math.floor((startIndex+endIndex)/2);
        if(arr[pointer]==val){
            return true;
        }else if(arr[pointer]>val){
            endIndex=pointer-1;
            
        }else{
            startIndex=pointer+1;
        }
    }
    return false;
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // should log true
console.log(binarySearch([1, 2, 4, 5], 3)); // should log false
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4)); // should log true


//JavaScript array methods
//CONCAT- joins multiple arrays and returns a copy of the joined arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);// expected output: Array ["a", "b", "c", "d", "e", "f"]

//EVERY-iterates every element of the array , verifying the desired condition(function) until false is returned
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));// expected output: true

//FILTER-creates an array with each element that evaluates to true in the function provided.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);// expected output: Array ["exuberant", "destruction", "present"]

//FOREACH- executes a specific function on each element of the array
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

//JOIN-joins all tha  array elements into a string
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());// expected output: "Fire,Air,Water"
console.log(elements.join(''));// expected output: "FireAirWater"
console.log(elements.join('-'));// expected output: "Fire-Air-Water"

//INDEXOF-searches the array for specific elements and returns its position
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));// expected output: 4

console.log(beasts.indexOf('giraffe'));// expected output: -1

//LASTINDEXOF-returns the position of the last item in the array that matches the search criterion
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));// expected output: 3
console.log(animals.lastIndexOf('Tiger'));// expected output: 1

//MAP-creates a new array from a function that contains the criterion/condition and returns the elements
//of the array tha match the criterion
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);// expected output: Array [2, 8, 18, 32]

//REDUCE-method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));// expected output: 15

//REVERSE-reverses the array so that the last item becomes the first and vice versa
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

//SLICE-returns a new array from the specified index
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));// expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));// expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals) //expected output: Array [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]

//SPLICE-changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');// inserts at index 1
console.log(months);// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');// replaces 1 element at index 4
console.log(months);// expected output: Array ["Jan", "Feb", "March", "April", "May"]


//SOME-iterates every element of the array, verifying the desired condition(function) until true is returned
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));// expected output: true

//SORT-sorts the array alphabetically or by the supplied function
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);// expected output: Array [1, 100000, 21, 30, 4]

//TOSTRING-returns the array as a string
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());// expected output: "1,2,a,1a"

//ENTRIES-method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();

console.log(iterator1.next().value);// expected output: Array [0, "a"]
console.log(iterator1.next().value);// expected output: Array [1, "b"]

//KEYS-method returns a new Array Iterator object that contains the keys for each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}
// expected output: 0
// expected output: 1
// expected output: 2

//VALUES-method returns a new Array Iterator object that contains the values for each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"

//FROM-static method creates a new, shallow-copied array instance from an array-like or iterable obj
console.log(Array.from('foo'));// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));// expected output: Array [2, 4, 6]

//OF- method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // array of 7 empty slots
Array(1, 2, 3);    // [1, 2, 3]

//FILL-method changes all elements in an array to a static value, from a start index (default 0) to an 
//end index (default array.length). It returns the modified array.
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));// expected output: [6, 6, 6, 6]

//COPYWITHIN-method shallow copies part of an array to another location in the same array and returns it without modifying its length.
const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));// expected output: Array ["d", "d", "e", "d", "e"]

//FIND-returns the value of the first element in the provided array that satisfies the provided testing function.
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);// expected output: 12

//FINDINDEX- method returns the index of the first element in the array that satisfies the provided testing function. 
//Otherwise, it returns -1, indicating that no element passed the test.
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));// expected output: 3

//INCLUDES-determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array1 = [1, 2, 3];
console.log(array1.includes(2));// expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));// expected output: true
console.log(pets.includes('at'));// expected output: false




