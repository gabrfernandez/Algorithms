//bubble sort 
//Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
function bubbleSort(arr){
    for(var i=0; i<arr.length-1;i++){
        for(var j=0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
arr=[9,7,5,3,1];
bubbleSort(arr);

//selection sort
//sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. 
function selectionSort(arr){
    for(var i=0; i<arr.length; i++){
        var min=i
        for (j=i+1; j<arr.length; j++){
            if(arr[min]>arr[j]){
                min=j;
            }
        }
        if (min!==i){
            var temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return arr;
}
arr=[1,4,3,5,6,8,9];
selectionSort(arr);

//insertion sort
//sorting algorithm that builds the final sorted array one item at a time
function insertionSort(arr){
    for(var i=0; i<arr.length; i++){
        var insert=arr[i];
        var j=i-1;
        while(j>=0 && insert<arr[j]){
            arr[j+1]= arr[j];
            j--;
        }
        arr[j+1]=insert;
    }
    return arr;
}
arr=[5,7,8,9,4,3,15,17,21];
insertionSort(arr);

//merge sort
//It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.
function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    const middle=Math.floor(arr.length/2);
    const left=arr.slice(0,middle);
    const right=arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let arr=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            arr.push(left.shift());
        }else{
            arr.push(right.shift());
        }
    }
    return arr.concat(left.slice()).concat(right.slice());
}
arr=[4,5,8,12,15,75,34,69];
mergeSort(arr);

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
    if(startIdx<endIdx){
        let pivot=arrayPartition(arr, startIdx, endIdx);
        quickSort(arr, startIdx, pivot-1);
        quickSort(arr, pivot+1, endIdx);
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