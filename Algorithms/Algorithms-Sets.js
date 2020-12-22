//Algorithms-Sets

class Set{
    constructor(){
        this.items={};
    }

    has(element){
        return element in items;
    }

    add(element){
        if(!this.has(element)){
            this.items[element]=element; //add element to set
            return true;
        }
        return false;
    }

    delete(element){
        if(this.has(element)){
            delete this.items[element]; //remove element from set
            return true;
        }
        return false;
    }

    clear(){
        this.items={};
    }

    size(){
        return Object.keys(this.items).length
    }

    sizeLegacy(){
        let count=0;
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                count++;
            }
        }
        return count;
    }

    values(){
        return Object.values(this.items)
    }

    valuesLegacy(){
        let values=[];
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                values.push(key);
            }
        }
        return values;
    }

    //the element exist in A or B
    union(otherSet){
        const unionSet= new Set();
        this.values().forEach(value=>unionSet.add(value));
        otherSet.values().forEach(value=>unionSet.add(value));
        return unionSet;
    }

    //the element exist in both sets
    intersection(otherSet){
        const intersectionSet=new Set(); //create new set to return common elements
        const values=this.values(); //retrieve values of current set instance
        const otherValues=otherSet.values();//the given set pass as a parameter to intersection method
        let biggerSet=values;//assume that current instance is the bigger set
        let smallerSet=otherValues; //assume given set is the smaller set
        if(otherValues.length-values.length>0){//given set has more elements than the current instance, switch values
            biggerSet=otherValues;
            smallerSet=values;
        }
        smallerSet.forEach(value=>{//iterate smaller set ot calculate common values between sets and return result
            if(biggerSet.includes(value)){
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }

    //the element exists in A, but not in B
    difference(otherSet){
        const differenceSet=new Set();
        this.values().forEach(value=>{
            if(!otherSet.has(value)){
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }

    //every element that exists in A, it also needs to exist in B
    isSubsetOf(otherSet){
        if(this.size()>otherSet.size()){//check if current instance has more elements than otherSet, which it can't
            return false;
        }
        let isSubset=true; //assume current instance is subset of given set
        this.values().every(value=>{//iterate through all current set elements
            if(!otherSet.has(value)){//verify that the element also exists in otherSet
                isSubset=false;//not a subset then return false;
                return false;
            }
            return true;
        });
        return isSubset;//return either true or false
    }


}

var set=new Set()

set.add(10)
set.add(20)
set.add(30)
console.log(set.values()); //[10,20,30]
console.log(set.has(10)) //true
console.log(set.size()) //3
console.log(set.delete(20)) //deletes 20 & returns true

const setA = new Set(); 
setA.add(1); 
setA.add(2); 
setA.add(3);
const setB = new Set(); 
setB.add(3); 
setB.add(4); 
setB.add(5); 
setB.add(6);
const unionAB = setA.union(setB); 
console.log(unionAB.values()); //[1,2,3,4,5,6]

const intersectionAB=set.intersection(set2);
console.log(intersectionAB.values());

const differenceAB=set.difference(set2)
console.log(differenceAB.values());

const setA = new Set(); 
setA.add(1); 
setA.add(2);
const setB = new Set(); 
setB.add(1); 
setB.add(2); 
setB.add(3);
const setC = new Set(); 
setC.add(2); 
setC.add(3); 
setC.add(4);
console.log(setA.isSubsetOf(setB)); 
console.log(setA.isSubsetOf(setC));

//union 
//console.log(new Set([...setA, ...setB])); 

//intersection
//console.log(new Set([...setA].filter(x=>setB.has(x))));

//difference
//console.log(new Set([...setA].filter(x=>!setB.has(x))));

//Native set ES2015
const setA = new Set(); 
setA.add(1); 
setA.add(2); 
setA.add(3);
const setB = new Set(); 
setB.add(2); 
setB.add(3); 
setB.add(4);

const union = (set1, set2) => {
    const unionAb = new Set(); 
    set1.forEach(value => unionAb.add(value)); 
    set2.forEach(value => unionAb.add(value)); 
    return unionAb;
};
console.log(union(setA, setB)); // {1, 2, 3, 4}

const intersection = (set1, set2) => { 
    const intersectionSet = new Set(); 
    set1.forEach(value => {
        if (set2.has(value)) { 
            intersectionSet.add(value);
        } 
    });
         return intersectionSet;
};
console.log(intersection(setA, setB)); // {2, 3}


const difference = (set1, set2) => { 
    const differenceSet = new Set(); 
    set1.forEach(value => {
        if (!set2.has(value)) { // {1} differenceSet.add(value);
        } 
    });
    return differenceSet;
};
console.log(difference(setA, setB));