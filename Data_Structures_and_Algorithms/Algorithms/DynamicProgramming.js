//Dynamic Programming - just an optimization technique using cache

//Dynamic Programming = Divide & Conquer (recursion) + Memoization 
//1 can be divide into subproblem 
//2 recursion solution
//3 are there repetitive subproblems
//4 memoize subproblems

//cache is a way to store values to use them later on
//memoization-storing the results of expensive function calls 
//and returning the cached result when the same inputs occur again.
function addTo80(n){
    return n +80;
}
addTo80(5)

function memoizedAddTo80(){
    let cache={};
    return function (n){//closure
        if(n in cache){ //checks if property exists in object
            return cache[n]
        }else{
            cache[n]=n +80;
            return cache[n]
        }
    }
}
const memoized= memoizedAddTo80();
memoized(5);

//fibonacci
//0,1,1,2,3,5,8,13,21,34,55,89,144,233...
function fibonacci(n){ //O(2^n)
    if(n<2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
fibonacci(5);



function fibonacciMemoized(){ //O(n), but we increase space complexity
    let cache={};
    return function fib(n){
        if(n in cache){ //check the cache
            return cache[n];
        }else{
            if (n<2){
                return n;
            }else{
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}
const fasterFib= fibonacciMemoized();
fasterFib(10);

//fibonacci bottom up approach, avoids recursion
function fibonacciBottomUp(n){
    let answer=[0,1];
    for(let i=2; i<=2;i++){
        answer.push(answer[i-2] + answer[i-1]);
    }
    return answer.pop()
}
fibonacciBottomUp()

//House Robber problem

//Best time to buy and sell stock

//Climbing stairs