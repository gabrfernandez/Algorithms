// takes in an array of SVGAnimatedNumberList, returns the sum of all the elements
function rSumArray(arr, i=0){
    if (i== arr.length-1){
        return arr[i];
    }else{
        return arr[i] + rSumArray(arr, i+1);
    }
}

// rSumArray([2], i=0) // returns arr[0] + rSumArray([2], 1) = 2 + 0 = 2
// rSumArray([2,4], i=0) // needs to return 6; return arr[0] + rSumArray([2,4], 1) = arr[0] + arr[1] + rSumArray([2,4], 2) = arr[0] + arr[1] + 0 = 6

console.log(rSumArray([1, 4, 6])); // should log 11
console.log(rSumArray([2, -4, 6])); // should log 4

// takes in a Number and a default indexedDB, return the sum of numbers from 1 up to and including the number
function rSigma(num){
    if(num==1){
        return num;
    }else{
        return num + rSigma(num-1)
    }
}
console.log(rSigma(4)); // should log 10 (1 + 2 + 3 + 4)
console.log(rSigma(5)); // should log 15 (1 + 2 + 3 + 4 + 5)

//takes in a sorted array and a value to find, returns a boolean to determine if value is in array
//with slice
function rBinarySearch(arr, val){
    if(arr.length===0) return false;
    var midpointIndex=Math.floor((arr.length-1)/2);
    if(arr[midpointIndex]===val) return true;
    else if(arr[midpointIndex<val]) return rBinarySearch(arr.slice(midpointIndex+1), val);
    else return rBinarySearch(arr.slice(0,midpointIndex), val);
}
//without slice
function rBinarySearch(arr, val, startIndex=0, endIndex=arr.length-1){
    if(endIndex<startIndex) return false;
    var midpointIndex=Math.floor((endIndex+startIndex)/2);
    if (arr[midpointIndex]===val) return true;
    else if(arr[midpointIndex]<val) return rBinarySearch(arr, val, startIndex=midpointIndex+1, endIndex);
    else return rBinarySearch(arr, val,startIndex, endIndex=midpointIndex-1);
}

console.log(rBinarySearch([1,2,3,4,5],3)); // should log TRUE
console.log(rBinarySearch([1,2,3,4,5], 7)); //should log FALSE

//takes in a string, returns a new string with ths characters reverse
function rStringReverse(str){
    if (str==="") return "";
    if(str.length===1)return str;
    return str[str.length-1]+rStringReverse(str.slice(0,str.length-1));
}
console.log(rStringReverse("i"));
console.log(rStringReverse('hi'));
console.log(rStringReverse('hello')); // should log 'olleh'
console.log(rStringReverse('world')); // should log 'dlrow'

//takes in a string, an array of solutions, and partial solution string
//returns an array of anagrams. NOTE: order of the individual strings inside the returned
//array is unimportant; just get them all
function stringAnagrams(str, anagrams=[], partial=''){
    if(str.length==1){
        anagrams.push(partial+str)
    }else{
        for(var i=0; i<str.length;i++){
            var newStr=str.slice(0,i)+str.slice(i+1)
            stringAnagrams(newStr, anagrams,partial+str[i])
        }
    }
    return anagrams
}
console.log(stringAnagrams('mi')); // should log ['mi', 'im']
console.log(stringAnagrams('mil'));// should log ['mil', 'mli', 'iml', 'ilm', 'lim', 'lmi']

//takes in an integer, returns an integer, sums all the digits until the answer has only one digit
function rSumToOneDigit(num){
    if(num<10) return num;
    var lastDigit=num%10;
    var sum=lastDigit + rSumToOneDigit(Math.floor(num/10));
    return rSumToOneDigit(sum);
}
console.log(rSumToOneDigit(19)); // should log 1: 1 + 9 = 10 -> 1 + 0 = 1
console.log(rSumToOneDigit(999)); // should log 9: 9 + 9 + 9 = 27 -> 2 + 7 = 9
