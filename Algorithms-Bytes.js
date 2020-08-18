//linearSearch
//write a function that searches a key in an array and returns the position of that key
function linearSearch(x, arr){
    for(i=0; i<arr.length; i++){
        if(arr[i]==x){
            return i;
        }
    }
    return false;
}
x=3;
var arr=[1,3,5,7,9];
linearSearch(x,arr);

//rSum
//write a function that sums up all the previous numbers of a given input using recursive
function rSum(num){
    if(num==1){
        return 1;
    }else{
        return num + rSum(num-1);
    }
}
rSum(5);

//iSum
//write a function that sums up all the previous numbers of a given input using iteration
function iSum(num){
    var sum=0;
    for(var i=1; i<=num;i++){
        sum+=i;
    }
    return sum;
}
iSum(5);

//iFactorial
//write a function that gives the factorial of a number using iteration
function iFactorial(num){
    var multiplier=1;
    for(var i=1;i<=num;i++){
        multiplier*=i;
    }
    return multiplier
}
iFactorial(5);

//rFactorial
//Write a function that gives you the factorial of a number using recursive 
function rFactorial(num){
    if(num==1){
        return 1;
    }else{
        return num*rFactorial(num-1);
    }
}
rFactorial(5);

//iFibonacci
//write a function that produces the Fibonacci sequence using iteration 
function iFibonacci(num){
    var arr=[0,1];
    for(var i=0; i<num;i++){
        arr.push(arr[0]+arr[1]);
        arr.shift();
    }
    return arr[0];
}
iFibonacci(5);

//rFibonacci
//Write a function that produces the Fibonacci sequence using recursive 
function rFibonacci(num){
    if(num==1 || num==2){
        return 1;
    }else{
        return rFibonacci(num-1) + rFibonacci(num-2);
    }
}
rFibonacci(5);

//rBinarySearch
//Write a function that does a binarySearch for a sorted array using recursive
function rBinarySearch(val, arr, min,max){
    if(max<min){
        return false;
    }else{
        var midpoint=Math.floor((max+min)/2);
        if(arr[midpoint]===val){
            return val +" is in position "+midpoint;
        }else if(arr[midpoint]<val){
            return rBinarySearch(val, arr, min=midpoint+1, max);
        }else{
            return rBinarySearch(val, arr, min, max=midpoint-1);
        }
    }
    
}
arr=[1,3,5,7,9]
rBinarySearch(7,arr,1,9);

//iBinarySearch
//Write a function that does a binarySearch using iteration
function iBinarySearch(val, arr){
    var min=0;
    var max=arr.length-1;
    while(min<=max){
        var midpoint=min+Math.floor((max-min)/2)
        if(arr[midpoint]===val){
            return val +" is in position "+midpoint;
        }else if(arr[midpoint]<val){
            min=midpoint+1
        }else{
            max=midpoint-1
        }
    }
}
arr=[1,3,5,7,9];
iBinarySearch(7,arr);



