//Linked Lists- Singly & Doubly 
//Singly linked list contains set of nodes (value of data, and pointer to next node)
//first node is called head, last node is called tail
//linked  lists are null terminate which suggest the end of the list (points to null)
//JS doesn't have built-in linked lists, JAVA does 
// we don't have to shift entire list, making insertion and deletion
//linked list have some ordered, unlike hash tables/objects. Each node points to next node
//prepend & append are O(1)
//lookup (traversal), insert, delete are O(n)
// a pointer is a reference to another object/place in memory
//JS has garbage collected to make memory management easier

//pro: easy implementation, less memory, faster
//con: cannot be reverse(traverse from back), 

//linked lists:
//pros: fast insertion, fast deletion, ordered, flexible size
//con: slow lookup, more memory

//1->10->99->5->16->88
// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
//
class LinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null,
        }
        this.tail = this.head;
        this.length= 1
    }
    append(value){
        //creating new node
        const newNode={
            value:value,
            next:null
        };
        //setting tail.next property to point to new node
        this.tail.next=newNode;
        //setting tail as new node
        this.tail=newNode;
        this.length++;
    }
    prepend(value){
        //creating new node
        const newNode={
            value:value,
            next:null
        };
        //setting newNode next property as head
        newNode.next= this.head;
        //setting head as new node
        this.head=newNode;
        this.length++;
    }
    printList(){
        const array= [];
        //starting off at the head
        let currentNode= this.head;
        //while currentNode exist
        while (currentNode != null){
            //add node to array
            array.push(currentNode.value);
            //traversing, setting current node to next one
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
        //creating new node
        const newNode={
            value:value,
            next:null
        };
        //setting leader as node before insertion index position
        const leader = this.traverseToIndex(index-1);
        //setting holdingPointer as leader.next(node after)
        const holdingPointer = leader.next;
        //setting leader(node before) next property to point to new node
        leader.next=newNode;
        //setting new node next property to point to holdingPointer(node after new node)
        newNode.next= holdingPointer;
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
        //setting leader as node before
        const leader = this.traverseToIndex(index-1);
        //setting unwantedNode as node to delete
        const unwantedNode= leader.next;
        //pointing node before to point to next node, skipping unwantedNode
        leader.next= unwantedNode.next; 
        this.length--;
        return this.printList()

    }

    reverse(){
        if(!this.head.next){
            return this.head;
        }
        let first = this.head;
        this.tail=this.head;
        let second= first.next;
        while(second){
            //assign a temp variable to reference third in line
            const temp = second.next;
            //change the  arrows/pointers reverse
            second.next=first;
            //switch the variables
            first=second;
            second=temp;
        }
        //making the original first element to point to null to be new tail
        this.head.next=null;
        //first is the last node by now, so it will be head
        this.head= first; 
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
myLinkedList.reverse()
console.log(myLinkedList)


