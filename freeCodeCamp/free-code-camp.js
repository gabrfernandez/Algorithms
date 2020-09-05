//given array of two numbers, find the Sum all numbers within that range
function sumAll(arr){
    let min, max;
    if(arr[0]>arr[1]){
        max=arr[0];
        min=arr[1];
    }else{
        max=arr[1];
        min=arr[0];
    }
    let sum=0;
    for(let i=min;i<=max;i++){
        sum+=i;
    }
    return sum;
}
console.log(sumAll([1,4]))//log 10 since 1+2+3+4=10

//Diff two arrays
//compare two arrays and return a new array with items only found in one of the two given arrays, but not both
//return the symmetric difference of the two arrays 
function diffArray(arr1,arr2){
    const union=[];
    for(let i=0;i<arr1.length;i++){
        if(!union.includes(arr1[i])){
            union.push(arr1[i]);
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(!union.includes(arr2[i])){
            union.push(arr2[i]);
        }
    }

    const symmDiff=[];
    for(let i=0;i<union.length;i++){
        const currentElement=union[i];
        if(arr1.includes(currentElement)&& !arr2.includes(currentElement)){
            symmDiff.push(currentElement);
        }else if(arr2.includes(currentElement) && !arr1.includes(currentElement)){
            symmDiff.push(currentElement);
        }
    }
    return symmDiff;
}
arr1=[1,2,3,5];
arr2=[1,2,3,4,5];
console.log(diffArray(arr1,arr2))//[4]

//using set as sets only save unique values 
function diffArraySet(arr1, arr2){
    const union= new Set([...arr1, ...arr2])
    console.log(union)
    const symmDiff=[];
    for(const currentElement of union){
        if(arr1.includes(currentElement)&& !arr2.includes(currentElement)){
            symmDiff.push(currentElement);
        }else if(arr2.includes(currentElement) && !arr1.includes(currentElement)){
            symmDiff.push(currentElement);
        }
    }
    return symmDiff;
}
arr1=[1,2,3,5];
arr2=[1,2,3,4,5];
console.log(diffArraySet(arr1,arr2))//[4]