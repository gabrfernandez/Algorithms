//Algorithms-Reverse

//reverse the elements of an array
function reverse(arr){
    for(var i=0; i<arr.length/2;i++){
        var temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
console.log(reverse([1,2,3,4,5])) // should log [5,4,3,2,1]

//reverse the characters of a string
function stringReverse(str){
    var newArr=[]
    for(var i=str.length-1; i>=0; i--){
        newArr.push(str[i]);
        var joinArray=newArr.join("");
    }
    return joinArray;
}
console.log(stringReverse("gabe")) //should log "ebag"

//reverse the word order, not necessary the characters
function reverseWordOrder(str) {
    var newStr = "";
    var newArr = [];
    var word = "";
    for ( var i = 0; i <str.length; i ++){
        if (str[i] === " " && word !== "") {
            newArr.push(word);
            word = "";
        }
        else if (str[i] !== " ") {
            word += str[i];
        }
    }
    if (word !== "") {
        newArr.push(word);
    }
    for (var j = newArr.length-1; j >= 0; j--) {
        newStr += newArr[j];
        if (j !== 0) {
            newStr += " ";
        }
    }
    return newStr;
}

console.log(reverseWordOrder('this statement'));
// should log 'statement this'
console.log(reverseWordOrder('This is a test'));
// should log 'test a is This'

//reserve each character of a word, but the order of the words should remain the same
function reverseWords(str){
    var reverseWord='';
    var tempStr='';
    for(var i=0;i<str.length;i++){
        if(str[i]!==' '){
            tempStr=str[i]+tempStr;
        }else{
            reverseWord=reverseWord+' '+tempStr;
            tempStr='';
        }
    }
    if(tempStr!==''){
        reverseWord=reverseWord+' '+tempStr;
    }
    return reverseWord;
}
console.log(reverseWords("hello")); //should log 'olleh'
console.log(reverseWords('this that')); //should log 'siht taht'