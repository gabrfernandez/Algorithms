//Data structures + algorithms= programs
//class {} + function() = programs

//anything you do with a recursion CAN be done iteratively (loop)
//PRO: DRY(Don't Repeat Yourself), Readability
//Con: Large Stack=long runtime, time and space complexity 

//use recursion-traversing or searching through graphs(BFS+DFS)
//every time you are using a tree or converting something into a tree, consider recursion
// 1 divide into a number of subproblems that are smaller instances of the same problem
//2 each instance of the subproblem is identical in nature
//3 the solutions of each subproblem can be combined to solve the problem at hand.
//DIVIDE AND CONQUER using Recursion

//recursion-function calls itself within that function and exits with base case
//1 identify the base case-when to stop
//2 identify the recursive case
//3 get closer and closer and return when needed. Usually have 2 returns, for base and recursive case
let counter=0;
function inception(){
    console.log(counter)
    if(counter>3){ //base
        return 'done'
    }
    counter++;
    return inception();//recursive
}
inception()

//write two functions that find the factorial of any number
//one should use recursive, the other should use for loop
function findFactorialRecursion(value){ // O(n) time 
    if(value<=2){//base case
        return 2;
    }
    return value*findFactorialRecursion(value-1)//recursive case
}
findFactorialRecursion(5); //logs 120

function findFactorialForLoop(value){ //O(n) time
    let answer=1
    for(i=2;i<=value;i++){
        temp=temp*i;
    }
    return answer;
}
findFactorialForLoop(5); //logs 120

//Given a number N return the index value of the Fibonacci sequence
//0,1,1,2,3,5,8,13,21,34,55,89,144...
//the pattern of sequence is that each value is the sum of the previous 2
//N=5 -> 2+3
function FibonacciForLoop(value){ //O(n) linear time
    let arr=[0,1];
    for(let i=2;i<value+1;i++){
        arr.push(arr[i-2]+arr[i-1])
    }
    return arr[value];

}
FibonacciForLoop(5);

function FibonacciRecursive(value){ //O(2^N) exponential time
    if(value<2){
        return value;
    }
    return FibonacciRecursive(value-1) + FibonacciRecursive(value-2);
}
FibonacciRecursive(5);

//reverse a string 
function reverseString(str) {
    let arrayStr = str.split("");
    let reversedArray = [];
    //We are using closure here so that we don't add the above variables to the global scope.
    function addToArray(array) {
      
      if(array.length > 0) {
        reversedArray.push(array.pop());
        addToArray(array);
      }
      return;
    }
    addToArray(arrayStr);
    return reversedArray.join("");
}
  
reverseString('Hello Mister');


function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }
  
reverseStringRecursive('Hi master');