//print 1-255
//Write a function that would print all the numbers from 1 to 255 into an array
function get_array(){
    var arr=[];
    for (i=1; i<=255;i++){
        arr.push(i);
    }
    return arr;
}
get_array();

//Odd numbers
//Write a function that would print all the odd numbers from 1 to 1000 into an array
function oddNumbers(){
    var arr=[];
    for (i=1; i<=1000; i++){
        if(i%2==1){
            arr.push(i);
        }
    }
    return arr;
}
oddNumbers();

//print sum for odd numbers
//write a function that would print the sum of all the odd numbers from 1 to 5000
function sumOdd(){
    var sum=0;
    for (i=1; i<=1000; i++){
        if(i%2==1){
            sum+=i;
        }
    }
    return sum;
}
sumOdd();

//print sum for even numbers
//write a function that would print the sum of all even numbers from 1 to 1000
function sumEven(){
    var sum=0;
    for (i=1;i<=1000; i++){
        if(i%2===0){
            sum+=i
        }
    }
    return sum;
}
sumEven();

//iterate through the array
//Write a function that returns the sum of all the values within an array
function iterArr(arr){
    var sum=0;
    for(i=0; i<arr.length; i++){
        sum+= arr[i];
    }
    return sum;
}
x=[1,3,5,7,9];
iterArr(x);

//find max 
//Write a function that returns the maximum number in a given array
function findMax(arr){
    var max=arr[0];
    for(i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}
x=[1,3,5,7,9];
findMax(x);

//find average
//Write a function that returns the average of the values in a given array
function findAvg(arr){
    var sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length
}
x=[1,3,5,7,9];
findAvg(x);

//values greater than y
//write a function that takes an array and returns of values are greater than y
function greaterY(arr,y){
    var count=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>y){
            count++;
        }
    }
    return count;
}
y=4;
x=[1,3,5,7,9];
greaterY(x,y);

//square values of array
//write a function that replaces each values in the array with the product of the original value multiplied by itself
function squareVal(arr){
    var sum=0;
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i]*arr[i];
    }
    return arr;
}
x=[1,3,5,7,9];
squareVal(x);

//replace negative numbers with zero
//write a function that replaces any negative number with a zero in an array
function noNeg(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}
z=[1,-3,5,-7,9];
noNeg(z);

//find max, min,and average
// write a function that returns a new array that contains max, min, and average
function maxMinAvg(arr){
    var max=arr[0];
    var min=arr[0];
    var sum=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
        sum+=arr[i];
    }
    var avg=sum/arr.length;
    var newarr=[max, min,avg];
    return newarr;
}
x=[1,3,5,7,9];
maxMinAvg(x);

//swap first and last values
//write a function that will swap first and last values of given array
function swap(arr){
    var temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr;
}
x=[1,3,5,7,9];
swap(x);

//replace negative number with string 
//write a function that takes an array of numbers and replaces with the string "Negative"
function numToString(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="Negative";
        }
    }
    return arr;
}
x=[1,3,-5,7,9];
numToString(x);

//reverse
//write a function that reverses the order of a given array 
var arr = [1,3,5,7,9]
function reverse(arr){
    for(i=0; i<arr.length/2; i++){
        var temp= arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
reverse(arr);

//insert x at position y in an array
function insert(x,y){
    for(i=arr.length; i>y;i--){
        arr[i]=arr[i-1];
    }
    arr[y]=x;
    return arr;
}

var arr=[1,3,5,7,9];
x=10;
y=2;
insert(x,y);