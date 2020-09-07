//1 define the subproblems
//2 implement the recurrence that solves the subproblems
//3 recognize and solve the base cases 
//divide and conquer approach breaks the problem into independent subproblems and then 
//combines the solutions, dynamic programming breaks the problem into dependent subproblems

function minCoinChange(coins,amount){
    const cache=[]; // memorization
    const makeChange=(value)=>{ //function
        if(!value){ // if amount not positive, return []
            return [];
        }
        if (cache[value]){ // cache for memorization
            return cache[value];
        }
        let min=[];
        let newMin;
        let newAmount;
        for(let i=0; i<coins.length;i++){ //for each coin
            const coin=coins[i];
            newAmount=value-coin; //calculate newAmount which will decrease the value until reach the min amount we can give
            if(newAmount>=0){
                newMin=makeChange(newAmount); //if newAmount is positive, calculate result
            }
            if (
                newAmount>=0 && //newAmount is valid
                (newMin.length<min.length-1 || !min.length) && //min value is the best result
                (newMin.length|| !newAmount) //minValue and newAmount are valid values
            ){
                min=[coin].concat(newMin); //if all true, we have a better result than previously
                console.log('new Min ' +min+ ' for '+ amount);
            } 
        }
        return (cache[value]=min); //return final result
    }
    return makeChange(amount); //invoking function 
}

console.log(minCoinChange([1,5,10,25], 36));

//given a fixed-size knapsack with a capacity to carry W amount of weight and a set of items 
//that have a value and weight, find the best solution in a way to fill the knapsack with 
//the most valuable items so that the total weight is less than or equal to W.
function knapsack(capacity, weights, values, n){
    const kS=[];
    for(let i=0; i<=n; i++){ //1
        kS[i]=[];
    }
    for(let i=0; i<=n; i++){
        for (let w=0; w<=capacity; w++){
            if(i===0 || w===0){ //skip first row and column to work with indexes different than 0
                kS[i][w]=0;
            }else if(weights[i-1]<=w){ //item i can only be part of solution if its weight is less than capacity
                const a =values[i-1] + kS[i-1][w-weights[i-1]];
                const b= kS[i-1][w];
                kS[i][w]=a>b ? a : b; //find item and chose one with maximum value
            }else{
                kS[i][w]=kS[i-1][w]; //if total weight is bigger than capacity, ignore value and use previous one
            }
        }
    }
    findValues(n, capacity, kS, weights, values); //additional code
    return kS[n][capacity]; //, solution, found in the lower right-hand corner
}

function findValues(n, capacity, kS, weights, values){
    let i=n;
    let k=capacity;
    console.log('Items that are part of the solution: ');
    while(i>0 && k>0){
        if(kS[i][k] !== kS[i-1][k]){
            console.log(`item ${i} can be part of solution w, v: ${weights[i-1]}, ${values[i-1]}` )
            i--;
            k-=kS[i][k];
        }else{
            i--;
        }
    }
}

const values= [3,4,5], weights=[2,3,4], capacity=5, n=values.length;
console.log(knapsack(capacity, weights, values, n));

//finding the length of the longest subsequence in two string sequences. The longest subsequence 
//is a sequence that appears in the same relative order but is not necessarily contiguous 
//(not a substring) in both strings.
function lcs(str1, str2){
    let larger, smaller, largerLength, smallerLength;
    if(str1.length>= str2.length){
        larger=str1;
        smaller=str2;
    }else{
        larger=str2;
        smaller=str1;
    }
    largerLength=larger.length;
    smallerLength=smaller.length;
    let matrix=Array.from({length: smallerLength+1}, ()=>Array.from({length:largerLength+1},()=>0));
    console.log(matrix);
    for (let row=1; row<matrix.length;row++){
        for(let col=1; col<matrix[row].length;col++){
            if(larger[col-1]===smaller[row-1]){
                matrix[row][col]=matrix[row-1][col-1]+1
            }else{
                matrix[row][col]=Math. max(matrix[row][col-1], matrix[row-1][col])
            }
        }
    }
    console.log(matrix);
    let traceResult=[];
    (function tracer(row, col){
        if(matrix[row][col]===0) return 
        if(matrix[row][col]===matrix[row][col-1]){
            tracer(row, col-1)
        }else if(matrix[row][col]===matrix[row-1][col]){
            tracer(row-1, col)
        }else if(matrix[row][col]===matrix[row-1][col-1]+1){
            traceResult.push(larger[col-1])
            tracer(row-1,col-1)
        }
    })(smallerLength,largerLength)
    console.log(traceResult)
    return traceResult.reverse().join('')
}

console.log(lcs("acbaed", "abcadf")); //acad


//matrix chain multiplication 

