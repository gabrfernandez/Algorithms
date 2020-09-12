//given number from 0-99, return coins in cents in the least number of coins
function coinChangeUS(cents){
    var coins={};
    coins['quarters']=Math.floor(cents/25);
    cents=cents%25;
    coins['dimes']=Math.floor(cents/10);
    cents=cents%10
    coins['nickels']=Math.floor(cents/5);
    cents=cents%5;
    coins['pennies']=cents;
    return coins;
}
console.log(coinChangeUS(89));//{ quarters: 3, dimes: 1, nickels: 0, pennies: 4 }
console.log(coinChangeUS(7));//{ quarters: 0, dimes: 0, nickels: 1, pennies: 2 }

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