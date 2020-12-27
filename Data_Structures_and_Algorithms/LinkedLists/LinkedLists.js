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
// }

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
        const newNode={
            value:value,
            next:null
        };
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
    }
    prepend(value){
        const newNode={
            value:value,
            next:null
        };
        newNode.next= this.head;
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
            next:null
        };
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next=newNode;
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
        const leader = this.traverseToIndex(index-1);
        const unwantedNode= leader.next;
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
            const temp = second.next;
            second.next=first;
            first=second;
            second=temp;
        }
        this.head.next=null;
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


