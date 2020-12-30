//HashTables= HashMaps, Maps(Java), unordered maps, dictionaries(Python), objects(JS)
//HashTables or objects have a key(use as index) and value , no concept of order
//the hash function determines where to put the key and value 

//Hast tables are great to improve time complexity

//insert, lookup, delete, search all have O(1)
//collisions can cause O(n)

//pros= fast lookups (Good collision resolution needed), fast inserts, flexible keys
//cons=unordered, slow key iteration 

//created user object, with all properties being placed somewhere at different addresses
let user = {
    age:25,
    name:'Gabe',
    progammer:true,
    actions:function(){
        console.log('Kick!')
    }
}

user.age //logs 25  O(1)
user.height=6.0 //adds and assigns height property O(1)
user.actions() // logs 'Kick' O(1)

//HashTables don't evenly distribute, can cause collisions, stored in the same location (buckets)
//When that happens, a linked list forms in the bucket or different methods to solve collisions
//a collision has O(n/k) k is the size of hash table, but we remove constants=> O(n) 

//A Map allows you save any datatype as key, you can have functions, arrays, etc.
//it maintains insertion order, unlike object
//objects can only save strings as keys

//A Set is similar to a map, but only stores keys, no values


//implement own hash table from scratch 
class HashTable{
    constructor(size){
        this.data=new Array(size);
    }

    _hash(key){ // _ private property O(1)
        let hash=0;
        for (let i=0; i< key.length;i++){
            hash=(hash +key.charCodeAt(i)*i)%
            this.data.length
        }
        return hash;
    }

    set(key, value){ // O(1)
        let address = this._hash(key) //store data in this address space created by hash function
        if (!this.data[address]){
            this.data[address]=[];
            this.data[address].push([key,value])
        }else{
            this.data[address].push([key,value])
        }
        return this.data
    }

    get(key){ //O(1) if no collisions
        let address=this._hash(key);
        const currentBucket=this.data[address];
        if(currentBucket){
            for (let i =0; i<currentBucket.length;i++){
                if(currentBucket[i][0]===key){
                    return currentBucket[i][1];
                }
            }
        }else{
            return undefined
        }
    }

    keys(){ //iterate through all keys in hash table, O(n)
        if(!this.data.length){
            return undefined
        }
        let result=[];
        for(let i =0 ; i<this.data.length; i++){ // loop through all elements
            if(this.data[i] && this.data[i].length){// if it's not empty cell
                if(this.data.length > 1){ // loop through all potential collision
                    for(let j=0; j <this.data[i].length;j++){
                        result.push(this.data[i][j][0])
                    }
                }else{
                    result.push(this.data[i][0])
                }
            }
        }
        return result;
    }
}

const myHashTable = new HashTable(50) // instantiation hash table with 50 memory size/buckets
myHashTable.set('grapes', 1000) //adds 
myHashTable.set('apples', 50) //adds 
myHashTable.set('bananas', 25) //adds 
myHashTable.get('grapes') //logs 1000 , retrieves
myHashTable.keys() //logs grapes, apples, bananas

//Google question- first recurring character
//Given an array=[2,5,1,2,3,5,1,2,4];
//should log 2

//naive approach- nested for loop , O(n^2)
function firstRecurring(input){
    for(let i=0 ; i<input.length ; i++){
        for(let j=i+1; j<input.length; j++){
            if(input[i]===input[j]){
                return input[i]
            }
        }
    }
    return undefined;
}
firstRecurring([2,5,5,2,3,5,1,2,4]) //logs 2

function firstRecurringUpdate(input){
    for(let i=0 ; i<input.length ; i++){
        for(let j=i-1; j>=0; j--){
            if(input[i]===input[j]){
                return input[i]
            }
        }
    }
    return undefined;
}
firstRecurring([2,5,5,2,3,5,1,2,4]) //logs 5

//hash tables O(n)
function firstRecurring2(input){
    let map = {}; //increased space complexity with new map object
    for (let i=0 ; i< input.length; i++){
        if(map[input[i]]){
            return input[i]
        }else{
            map[input[i]]= true
        }
    }
    return undefined;
}
firstRecurring2([2,5,5,2,3,5,1,2,4]) //logs 5
