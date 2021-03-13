//Sorting
//javascript sort built-in function, it converts numbers into strings using the CharAT code
//Quick sort usually fastest, but down side is worst case. Careful of bad data or bad choice of pivot

//When to use each sorting algo:
//Quick: better than merge, but worst case is terrible. Better for space vs merge(average performance matters more, not worst case)
//Merge: fast across the board, but space complexity is expensive. Use if we don't care about space
//Insertion: use with only a few items, items are mostly sorted. very fast, little space, easy to implement
//Bubble: never. so bad
//Selection: never, so bad


//Bubble Sort- O(n^2) Time, 
//simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
//we bubble up the largest number toward the end 

function bubbleSort(arr){ //O(n^2) nested for loops
    for(let i=0; i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr; 
}
bubbleSort([4,6,3,2,5,9,8])

//Selection sort-sorts an array by repeatedly finding the minimum element (considering ascending order) 
//from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
function selectionSort(arr){
    for(let i=0; i<arr.length;i++){
        //set current index as min
        let min=i;
        let temp=arr[i];
        for(let j=i+1; j< arr.length;j++){
            if(arr[j]<arr[min]){
                //update min if necessary
                min=j
            }
        }
        arr[i]=arr[min];
        arr[min]=temp;
    }
    return arr;
}
selectionSort([2,5,3,6,8,6,0])

function swapSelectionSort(arr){
    for(let i=0; i<arr.length-1; i++){//outer loop, iterate the arr and control the passes
        let min=i // assume current value is minimum
        for (j=i; j<arr.length; j++){//starting from current i value to end arr
            if(arr[min]>arr[j]){//comparison of j position is less than current min value
                min=j;//set new min value
            }
        }
        if (min!==i){//if min value is different than original min value
            let temp=arr[i];//swap
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return arr;
}
arr=[1,4,3,5,6,8,9];
swapSelectionSort(arr);

//Insertion sort-useful for data that is almost sorted or small data 
// a simple sorting algorithm that builds the final sorted array one item at a time
function insertionSort(arr){ //O(n^2) on average
    for(let i=0; i<arr.length;i++){
        if(arr[i]<arr[0]){
            //move that item to first position
            arr.unshift(arr.splice(i, 1)[0]);
        }else{
            //sort smaller number than number on the left of it
            if(arr[i]<arr[i-1]){
                //find where that item should go
                for(let j=1; j<i;j++){
                    if(arr[i]>=arr[j-1] && arr[i]<arr[j]){
                        //move number to correct position
                        arr.splice(j,0, arr.splice(i,1)[0])
                    }
                }
            }
        }
    }
    return arr;
}
insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])

function improvedInsertionSort(arr){
    for(let i=1; i<arr.length; i++){//iterate arr, start at 1 since 0 will become 1st element in sorted portion
        let j=i;//j reps index of unsorted portion
        let insert=arr[i];//insert reps element we are moving into sorted portion
        while(j>=0 && insert<arr[j-1]){//iterating right to left in sorted portion, previous value in array is bigger than value we comparing
            arr[j]= arr[j-1];//shift previous value to current position
            j--;//decrease value of j
        }
        arr[j]=insert; // insert the value in correct position 
    }
    return arr;
}
arr=[5,7,8,9,4,3,15,17,21];
improvedInsertionSort(arr);

//Merge Sort-O(n log n)- use divide and conquer concept(recursion)
//It divides the input array into two halves, calls itself for the two halves, 
//and then merges the two sorted halves.
function mergeSort(arr){
    if(arr.length===1){ //base case
        return arr;
    }
    //split arr into right and left
    const middle=Math.floor(arr.length/2);
    const left= arr.slice(0,middle);
    const right= arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right)); //recursion
}

function merge(left, right){
    const result=[];
    let leftIndex=0;
    let rightIndex=0;
    while(leftIndex< left.length && rightIndex<right.length){//checking arrays have items
        if(left[leftIndex] < right[rightIndex]){//if left array first value is less
            result.push(left[leftIndex]);//add item to result array
            leftIndex++;//increment
        }else{ // if right array first value is less 
            result.push(right[rightIndex]);//add item to result
            rightIndex++; //increment 
        }
    }
    //add every remaining value from left arr to merge to result array and do same with right
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
arr=[4,76,45,23,12,15,11,99,85];
mergeSort(arr)

//Quick Sort-divide and conquer, recursion algorithm O(n log n)
//It picks an element as pivot and partitions the given array around the picked pivot
function quickSort(arr, left=0, right=arr.length-1){
    let pivot;
    let partitionIndex;

    if(left< right){
        pivot=right;
        partitionIndex= partition(arr, pivot, left, right);

        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}
function partition(arr, pivot, left, right){
    let pivotValue=arr[pivot];
    let partitionIndex=left;

    for(let i=left; i<right;i++){
        if(arr[i]<pivotValue){
            swap(arr, i , partitionIndex);
            partitionIndex++
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}
function swap(arr, firstIndex, secondIndex){
    let temp=arr[firstIndex];
    arr[firstIndex]=arr[secondIndex];
    arr[secondIndex]=temp;
}
quickSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])

/quick sort
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

//Non-Comparison sorts: counting and radix: only work with numbers in certain range
//they are able to beat the time complexity of O(n log n)

//Sorting exercises 
//1 sort 10 schools around your house by  distance:
    //INSERTION- small data, fast and easy. space complexity O(1).
//2 ebay sorts listing by the current bid amount
    // radix or counting as they are numbers(integers), knowing that data is always gonna be numbers in a range. 
//3 sport scores on ESPN
    //quick-many scores so worry about space
//4 massive database needs to sort through past year's user data
    //merge- since the data is external and worried about performance  
//5 almost sorted udemy review data needs to be update and add 2 new reviews 
    //Insertion- almost sorted
//6 temperature records for the past 50 years in canada
    //if integers(radix or counting), 
    //if decimals-QUICK to save space since 50 years
//7 large user name database needs to be sorted. data is very random 
    //merge since we are not worried space , 
    //or Quick sort if care about memory(but worst case is bad)
//8 you want to teach sorting for the first time
    //bubble or selection, not practical 

