//Doubly Linked lists
//similar to singly linked list, but also links to node before
//searching is more efficient
//lookup can start from both-ends
//but we need to hold more memory

//pro: can be traverse from front or back
//con: more complicated, more memory, more time 

// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//         this.prev=null;
//     }
// }

class DoublyLinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null,
            prev:null
        }
        this.tail = this.head;
        this.length= 1
    }
    append(value){
        const newNode={
            value:value,
            next:null, 
            prev: null
        };
        newNode.prev= this.tail;
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
    }
    prepend(value){
        const newNode={
            value:value,
            next:null, 
            prev:null
        };
        newNode.next= this.head;
        this.head.prev=newNode
        this.head=newNode;
        this.length++;
    }
    printList(){
        const array= [];
        let currentNode= this.head;
        while (currentNode != null){
            array.push(currentNode.value);
            currentNode=currentNode.next;
        }
        return array;
    }
    insert(index, value ){
        //check params
        if(index>=this.length){
            return this.append(value);
        }
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        const newNode={
            value:value,
            next:null, 
            prev:null
        };
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next=newNode;
        newNode.prev=leader;
        newNode.next= follower;
        follower.prev = newNode;
        this.length++;
        return this.printList()
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    delete(index){
        const leader = this.traverseToIndex(index-1);
        const unwantedNode= leader.next;
        leader.next= unwantedNode.next; 
        this.length--;
        return this.printList()

    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88)
myLinkedList.printList();
myLinkedList.delete(2)
console.log(myLinkedList)