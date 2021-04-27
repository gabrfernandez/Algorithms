//bubble sort 
//Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
function bubbleSort(arr){
  for(let i=0;i<arr.length;i++){ //outer loop, one pass per item in array
    for(let j=0;j<arr.length-1;j++){//inner loop, iterate from first position to penultimate 
      if(arr[j]>arr[j+1]){//comparison 
        let temp=arr[j];//swap
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr;
}
arr=[9,7,5,3,1];
bubbleSort(arr);

//improved bubble sort
function improvedBubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){//avoid unnecessary comparisons by inner loop
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(improvedBubbleSort([3,5,7,1,8,6,4]))

//selection sort
//sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. 
function selectionSort(arr){
    for(var i=0; i<arr.length-1; i++){//outer loop, iterate the arr and control the passes
        var min=i // assume current value is minimum
        for (j=i; j<arr.length; j++){//starting from current i value to end arr
            if(arr[min]>arr[j]){//comparison of j position is less than current min value
                min=j;//set new min value
            }
        }
        if (min!==i){//if min value is different than original min value
            var temp=arr[i];//swap
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return arr;
}
arr=[1,4,3,5,6,8,9];
selectionSort(arr);

let simpleSelectionSort = (arr) => {
    //Loop till the second last element
    for(let i = 0; i < arr.length - 1; i++){
       //Loop after the i till the last element
       for(let j = i + 1; j < arr.length; j++){
          //if jth element is less than the ith element then swap
          //change < to > for sorting in descending order
          if(arr[j] < arr[i]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
       }
    }
    //return the sorted array
    return arr;
 }
 arr=[1,4,3,5,6,8,9];
 simpleSelectionSort(arr);

//insertion sort
//sorting algorithm that builds the final sorted array one item at a time
function insertionSort(arr){
    for(var i=1; i<arr.length; i++){//iterate arr to find correct place for value of i
        var j=i;//assign i to auxiliary variable
        var insert=arr[i];//store value of i position in temp variable
        while(j>=0 && insert<arr[j-1]){//j bigger than 0, previous value in array is bigger than value we comparing
            arr[j]= arr[j-1];//shift previous value to current position
            j--;//decrease value of j
        }
        arr[j]=insert; // insert the value in correct position 
    }
    return arr;
}
arr=[5,7,8,9,4,3,15,17,21];
insertionSort(arr);

//merge sort
//It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.
function mergeSort(arr){
    if(arr.length<=1){//if arr is less than arr, return it
        return arr;
    }
    const middle=Math.floor(arr.length/2);//find middle of arr
    const left=arr.slice(0,middle);//split arr into smaller arr, left side
    const right=arr.slice(middle);//split arr into smaller arr, right side
    return merge(mergeSort(left), mergeSort(right));//call merge, responsible for merging and sorting smaller arrs into bigger
}

function merge(left, right){
    let arr=[];
    while(left.length && right.length){//iterate as long as we receive left and right parameters
        if(left[0]<right[0]){//If positive, we will add the value from the left array to the merged 
            //result array and also increment the variable that is used to iterate the array; 
            //otherwise, we will add the value from the right array and increment the variable that is used to iterate the array.
            arr.push(left.shift());
        }else{
            arr.push(right.shift());
        }
    }
    return arr.concat(left.slice()).concat(right.slice());//add every remaining value from left arr to merge to result array and do same with right
}
arr=[4,76,45,23,12,15,11,99,85];
mergeSort(arr);//[4, 11, 12, 15, 23,45, 76, 85, 99]

//quick sort
//It picks an element as pivot and partitions the given array around the picked pivot.
function arrayPartition(arr, startIdx=0, endIdx=arr.length-1){
    let pivotIdx=Math.ceil(Math.random()*(endIdx));
    let pivot=arr[pivotIdx];

    while (startIdx<endIdx){
        while(arr[startIdx]<pivot){
            startIdx++
        }
        while(arr[endIdx]>pivot){
            endIdx--;
        }
        if(startIdx<endIdx){
            let temp=arr[startIdx];
            arr[startIdx]=arr[endIdx];
            arr[endIdx]=temp;
        }
    }
    return startIdx;
}

function quickSort(arr, startIdx=0, endIdx=arr.length-1){
    if(startIdx<endIdx){//if endIdx is bigger than startIdx
        let pivot=arrayPartition(arr, startIdx, endIdx);
        quickSort(arr, startIdx, pivot-1);//function call on first half of array
        quickSort(arr, pivot+1, endIdx);//function call on second half of array
    }
    return arr;
}
arr=[1,4,2,6,5,9,8];
quickSort(arr);
//console.log("Pivot value "+arrayPartition(arr));


//have an object, Person, with name and age, and we want to sort the array based on the age of the person
const friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 }, 
  ];
  function comparePerson(a, b) {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  }
  console.log(friends.sort(comparePerson));
//   [
//     { name: 'Ana', age: 20 },
//     { name: 'Chris', age: 25 },
//     { name: 'John', age: 30 }
//   ]

//alphabetically order an array of names
names = ['Ana', 'ana', 'john', 'John', 'Gabe', 'gabriel'];
console.log(names.sort((a,b)=>a.localeCompare(b)))
//[ 'ana', 'Ana', 'Gabe', 'gabriel', 'john', 'John' ]