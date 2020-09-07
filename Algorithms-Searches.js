//sequential search or linear search
//comparing each element of data structure with the one we are looking for
function sequentialSearch(arr,value){
    for(let i=0;i<arr.length;i++){//iterate through arr
        if(value==arr[i]){//compares each value with the value we are searching for
            return i;//if true, returns the index
        }
    }
    return -1; //returns -1 if false;
}
console.log(sequentialSearch([1,2,3,4,5],4))//logs 3

//binary search
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

//interpolation search
//given sorted of n uniformly distributed values
function interpolationSearch(arr, value){
    const {length}=arr;
    let low=0;
    let high=length-1;
    let delta=-1;
    while(
        low<=high &&
        value>=arr[low] &&
        value<=arr[high]
    ){
        delta=(value-arr[low])/(arr[high]-arr[low]);
        position=low +Math.floor((high-low)*delta);
        if(arr[position]==value){
            return position;
        }
        if(arr[position]<value){
            low=position+1;
        }else{
            high=position-1;
        }
    }
    return false;
}
console.log(interpolationSearch([1,2,3,4,5,6,7,8,9],3))//logs 2

