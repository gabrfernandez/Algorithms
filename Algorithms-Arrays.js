//Algorithms-Arrays

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


//takes in tow equal-length arrays, returns an object, with the elements from the first as keys and te elements from the second as values
function zipArraysIntoMap(arr1, arr2){
    var newobj={};
    for(var i=0; i<arr1.length;i++){
        newobj[arr1[i]]=arr2[i];
    }
    return newobj;
}
console.log(zipArraysIntoMap(['some', 'thing'], ['other', 'stuff']));// should log { some: 'other', thing: 'stuff' }

//takes in an object, returns an object, with keys as values and values as keys
//to iterate through an object's keys: for(var key in obj)
//to get the value: obj[key]
function invertHash(obj){
    newobj={};
    for(var key in obj){
        newobj[obj[key]]=key;
    }
    return newobj;
}
console.log(invertHash({ someKey: 'someVal' })); // should log { someVal: 'someKey' }
console.log(invertHash({
    key1: 'val1',
    key2: 'val2'
})); // should log { val1: 'key1', val2: 'key2' }

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



