//Fisher and Yates 
//iterating each position of the array, starting with its last position and swapping the 
//current position with a random position. The random position is lesser than the current position;
function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
        const randomIndex=Math.floor(Math.random()*(i+1));
        let temp=arr[i];
        arr[i]=arr[randomIndex];
        arr[randomIndex]=temp;
    }
    return arr;
}
console.log(shuffle([1,2,3,4,5,6,7,8,9]))