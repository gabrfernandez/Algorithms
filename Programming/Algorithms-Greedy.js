//A greedy algorithm follows the problem-solving heuristic of making the locally optimal choice (the best solution at the time) 
//at each stage with the hope of finding a global optimum (global best solution). It does not evaluate the bigger picture like 
//a dynamic programming algorithm does.

//min-coin change problem
function minCoinChange(coins,amount){
    const change=[];
    let total=0;
    for(let i=coins.length;i>=0;i--){//iterating each coin from biggest to smallest
        const coin=coins[i];
        while(total + coin<=amount){//add coin value tto total and total needs to be less than amount
            change.push(coin);//add coin to the result
            total+=coin;//add coin to the total
        }
    }
    return change;
}
console.log(minCoinChange([1, 5, 10, 25], 36));//logs [25,10,1]

//fractional knapsack problem
function knapSack(capacity, weights, values){
    const n=values.length;
    let load=0;
    let val=0;
    for(let i=0; i<n && load<capacity;i++){//iterate through the items
        if(weights[i]<=capacity-load){//if total weight <= the capacity 
            val +=values[i];//add it to the total value
            load+=weights[i];
        }else{
            const r =(capacity-load)/weights[i];//use ratio or fractional part of weight
            val +=r *values[i];
            load +=weights[i];
        }
    }
    return val;
}