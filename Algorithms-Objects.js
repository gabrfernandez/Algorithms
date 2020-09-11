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