//#1 -- For loop in Javascript.
const nemo = ['nemo'];

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo1(nemo);

//#2 -- For loop in Javascript, checking runtime.
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo2 = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo');

function findNemo2(fish) {
  let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo2(everyone)// O(n) linear time, fair

//3 -- Constant time
const boxes = [0,1,2,3,4,5]
function compressFirstBox(arr){
    console.log(arr[0])
}
compressFirstBox(boxes) //O(1) constant time, excellent

// What is the Big O of the below function?
function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)
  
    for (let i = 0; i < input.length; i++) { //O(n)
      anotherFunction(); //O(n)
      let stranger = true; //O(n)
      a++;  //O(n)
    }
    return a;//O(1)
}
//Big O ( 3(1) + 4(n)) = O(n)

// What is the Big O of the below function? 
function anotherFunChallenge(input) {
    let a = 5; //O(1)
    let b = 10;//O(1)
    let c = 50;//O(1)
    for (let i = 0; i < input; i++) {
      let x = i + 1; //O(n)
      let y = i + 2;//O(n)
      let z = i + 3;//O(n)
  
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2;//O(n)
      let q = j * 2;//O(n)
    }
    let whoAmI = "I don't know"; //O(1)
}
//Big O ( 4(1) + 5(n))= O(n)

//Rules for Big O
//1 Worst Case, imagine for the worst case scenario 
//2 Remove constants, O(2n) becomes O(n) 
//3 Different terms for inputs, same level= you add ; nested levels=you multiple 
//4 drop non dominants O(n + n^2) simplifies to O(n^2)

//log all pairs
boxes=['a','b','c','d']
function logAllPairs(array){
    for(let i=0; i<array.length;i++){
        for(let j=0; j<array.length;j++){
            console.log(array[i],array[j])
        }
    }
}
logAllPairs(boxes) //logs aa, ab, ac, ad, ba, bb ...dd
// nested for loops = O(n*n) or O(n^2)- Quadratic time - horrible 

// Data Structures + algorithms = Programs
//Good code= readability and scalability (speed-time complexity, memory-space complexity)

function boo(n){
    for(let i=0; i<n.length;i++){
        console.log('boo!')
    }
}
boo([1,2,3,4,5])// boo1, boo1, boo1, boo1, boo1, 
//space complexity O(1)

function HiTimes(n){
    let = hiArray=[];
    for(let i=0; i<n;i++){
        hiArray[i]='hi'
    }
    return hiArray
}
HiTimes(6) // hi, hi, hi, hi, hi, hi, 
//space complexity O(n), we are adding memory

//Twitter exercise find 1st and last tweet of user's
const array=['first', 'second','oldest']
array[0] //O(1)
array[array.length-1]//O(1)

const array=[{tweet:'first', date:2020}, {tweet:'second',date: 2015},{tweet:'oldest', date:2012}]
//compare the dates of each tweet, gonna have to nested loops

//looping through in javascript
//forEach (arrow function) or for (let i of array){} same as for(let i=0, i<arr.length, i++){}