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
            this.items[element]=element;
            return true;
        }
        return false;
    }

    delete(element){
        if(this.has(element)){
            delete this.items[element];
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

    values(){
        return Object.values(this.items)
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
        const intersectionSet=new Set();
        const values=this.values();
        const otherValues=otherSet.values();
        let biggerSet=values;
        let smallerSet=otherValues;
        if(otherValues.length-values.length>0){
            biggerSet=otherValues;
            smallerSet=values;
        }
        smallerSet.forEach(value=>{
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
        if(this.size()>otherSet.size()){
            return false;
        }
        let isSubset=true;
        this.values().every(value=>{
            if(!otherSet.has(value)){
                isSubset=false;
                return false;
            }
            return true;
        });
        return isSubset;
    }

    
}

var set=new Set()

set.add(10)
set.add(20)
set.add(30)
console.log(set.has(10))
console.log(set.size())
console.log(set.delete(20))

var set2=new Set()

set2.add(100)
set2.add(200)
set2.add(300)
set2.add(10)

const unionAB=setA.union(setB)
console.log(unionAB.values())

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