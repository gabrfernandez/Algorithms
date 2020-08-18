//Algorithms-Strings

//Create a function that creates acronym
function getAcronym(str){
    var words, acronym, nextWord;
    words = str.split(' ');
    acronym= "";
    for(var i=0;i<words.length;i++) {
            nextWord = words[i];
            acronym += nextWord.charAt(0).toUpperCase();
    }
    return acronym
}
getAcronym("for your information");

// create a function that joins an array with a separator, takes in an array and a separator string
//returns a string connecting all the array, elements with the given separator

function join (arr, separator){
    var str="";
    for (var i=0; i<arr.length-1; i++){
        str+=arr[i]+separator;
    }
    str+=arr[arr.length-1];
    return str;
}
console.log(join(["a","b","c"],"|")); //logs 'a|b|c'


//takes in a string, returns a new string
//with only the last instance of each character, the character order should be preserved
function dedupe(str){
    var newstr="";
    for(var i=0; i<str.length;i++){
        var found=false;
        for(var j=i+1;j<str.length;j++){
            if(str[j]===str[i]){
                found=true;
                break;
            }
        }
        if(found==false){
            newstr+=str[i];
        }
    }
    return newstr;
}
console.log(dedupe('abac')); // should log 'bac'
console.log(dedupe('Snaps! crackles! pops!'));// should log 'Snrackle ops!'

//takes in a string, returns a new string, with individual "words" reversed
function reverseWord(str){
    var newstr="";
    var wordTracker=0;
    for(var i=0; i<str.length;i++){
        if(str[i]==" "){
            word=str.slice(wordTracker,i);
            for(var j=word.length-1;j>=0;j--){
                newstr+=word[j];
            }
            newstr+= " ";
            wordTracker=i+1
        }
    }
    word=str.slice(wordTracker, str.length);
    for(var j=word.length-1; j>=0; j--){
        newstr+=word[j];
    }
    return newstr;
}
console.log(reverseWord("hello")); // should log 'olleh'
console.log(reverseWord('this that')); // should log 'siht taht'

//takes in a string, returns a string, with the original compressed
//if the compressed version is not shorter, return original
function encode(str){
    var newstr="";
    var count=1;
    for(var i=0;i<str.length;i++){
        if(str[i]== str[i+1]){
            count++;
        }else{
            newstr=newstr+str[i]+count;
            count=1;
        }
    }
    if(newstr.length>=str.length){
        return str;
    }else{
        return newstr;
    }
}
console.log(encode('aabbbbbb')); // should log 'a2b6'
console.log(encode('abbbbbbbbbb')); // should log 'a1b10'
console.log(encode('abc')); // should log 'abc'

//takes in a string, returns a string, with he original "expanded"
// parseInt('a') returns NaN, parseInt('5') returns 5, isNan('c') returns true
function decode(str){
    var newstr="";
    var char="";
    var count="";
    for(var i=0;i<str.length;i++){
        if(str[i]!==char && isNaN(str[i])==true){
            for(var j=0;j<parseInt(count);j++){
                newstr+=char;
            }
            count="";
            char=str[i];
        }else if(isNaN(str[i])==false){
            count+=str[i];
        }
    }
    for(var k=0; k<parseInt(count);k++){
        newstr+=char;
    }
    return newstr;
}
console.log(decode('a2b6')); // should log 'aabbbbbb'
console.log(decode('a1b10')); // should log 'abbbbbbbbbb'

//takes in a string and a number, returns a new string with the characters, rotated to the left by the given number
//Note:the number can be greater than the string length;
function rotateString(str,num){
    num=num%str.length;
    return str.slice(-num)+str.slice(0,-num);
}
console.log(rotateString('Boris Godunov', 5));// should log 'dunovBoris Go'
console.log(rotateString('this', 5)); // should log 'sthi'

//takes in two strings, returns a boolean
//is the second string a rotation of the first? 
function isRotation(str1, str2){
    for(var i=0;i<str1.length;i++){
        if(rotateString(str1,i)===str2){
            return true;
        }
    }
    return false;
}
console.log(isRotation('Boris Godunov', 'dunovBoris Go'));// should log true
console.log(isRotation('hello world', 'llo worldHe'));// should log false

//takes in a string, returns a new string, with whitespace removed. 
function trim(str){
    var newstr="";
    for(var i=0; i<str.length;i++){
        if(str[i]!== " " && str[i]!== '\t' && str[i]!=='\n'){
            newstr+=str[i];
        }
    }
    return newstr;
}
console.log(trim('  this   ')); // should log 'this'
console.log(trim(`        multiline`)); // should log 'multiline'

//takes in two strings, returns a boolean, is the second string an anagram of the first?
function isAnagram(str1, str2){
    if(str1.length!==str2.length){
        return false;
    }
    for(var i=0; i<str1.length;i++){
        var found=false;
        for(var j=0; j<str2.length; j++){
            if(str1[i]==str2[j]){
                var temp="";
                for(var k=0; k<str2.length;k++){
                    if(k!==j){
                        temp+=str2[k];
                    }
                }
                str2=temp;
                found=true;
                break;
            }
        }
        if(found==false){
            return false;
        }
    }
    return true;
}
console.log(isAnagram('Yes', 'eYs')); // should log true
console.log(isAnagram('silent', 'listen')); // should log true
console.log(isAnagram('ono', 'noa')); // should log false


