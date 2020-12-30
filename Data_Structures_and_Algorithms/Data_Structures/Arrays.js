//Arrays- data structure with index and value with the data stored contiguous.
//Pros= Fast lookups, Fast push & pop, Ordered ( close in memory so it is fast)
//Cons=slow inserts & deletes (need to shift if its not end array), fixed sized(static array)

//lookup O(1), push O(1), insert O(n), delete O(n)

const stings=['a', 'b', 'c', 'd'];

//push, O(1)
strings.push('e')
console.log(strings)// logs ['a', 'b', 'c', 'd', 'e']

//pop, O(1)
strings.pop()
console.log(strings) //logs ['a', 'b', 'c', 'd']

//unshift, O(n) as we need to shift entire array
strings.unshift('x')
console.log(strings) // logs ['x','a', 'b', 'c', 'd']

//splice O(n/2)=>O(n) as we needed to shift half of array 
strings.splice(2, 0, 'alien')
console.log(strings)// logs ['x', 'a','alien','b','c']

//Static arrays- fixed in size, need to specific amount of memory ahead of time
//Dynamic arrays- copy and rebuild array in a new location in memory, expands as the array expands


//reference type - non primitive type, not define by programming language

//context- this, reference to the object it is in.

//instantiation- making instances or a copy of object, reuse code(class)
class Player{
    constructor(name,type){ //constructor
        this.name=name; //property or attribute
        this.type=type;
    }
    introduce(){ //method 
        console.log(`Hi I am ${this.name}. I am a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name,type){
        super(name, type) //inherits parent class attributes
    }
    play(){
        console.log(`Weee, I am a ${this.type}`);
    }
}

const wizard1= new Wizard('Harry Potter', 'Apprentice')
const wizard2= new Wizard('Ron', 'Healer')


//building an array from scratch
class MyArray{
    constructor(){
        this.length=0;
        this.data={};
    }
    access(index){ //O(1)
        return this.data[index]
    }
    push(item){
        this.data[this.length]=item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem=this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item= this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index){
        for (let i =index; i<this.length-1; i++ ){
            this.data[i]= this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('a');
newArray.push('b');
newArray.push('c');
newArray.push('d');
newArray.pop()
newArray.delete(1)

//reverse a string
function reverse(str){
    //check input
    if(!str|| str.length<2|| typeof str !== 'string'){
        return 'Please return a string';
    }
    const backwards=[];
    const totalItems=str.length-1;
    for( let i =totalItems;i>=0;i--){
        backwards.push(str[i])
    }
    return backwards.join('') // joins into string
}
reverse('gabriel')

//reverse a string with built-in functions
function reverse2(str){
    return str.split('').reverse().join('')
}
reverse2('gabriel');

//reverse function with arrow functions
const reverse3=str=>str.split('').reverse().join('')

//reverse a string with decrementing for loop and not using array
function reverse4(str){
    let newString="";
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    return newString
}
reverse4('gabriel')

//merge two sorted arrays
function mergeSortedArrays(array1, array2){
    const mergedArray=[];
    let array1Item=array1[0];
    let array2Item=array2[0];
    let i =1;
    let j=1;

    //check input
    if (array1.length===0){
        return array2
    }
    if(array2.length===0){
        return array1
    }
    while (array1Item || array2Item){
        if(!array2Item || array1Item<array2Item){
            mergedArray.push(array1Item)
            array1Item=array1[i]
            i++
        }else{
            mergedArray.push(array2Item);
            array2Item=array2Item[j];
            j++;
        }
    }
    return mergedArray;
}
mergeSortedArrays([0,3,4,31], [4,5,30]);

//Two sum-Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.

//brute force- O(n^2)- nested for loops
function twoSum(arr, target){
    const result =[];
    for (let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                result.push(i)
                result.push(j)
            }
        }
    }
    return result
}
twoSum([1,3,5,7,5], 10)

// maximum subarray-given array, find the contiguous which has the largest sum and return its sum

//move zeroes

//contains duplicate 

//rotate array
