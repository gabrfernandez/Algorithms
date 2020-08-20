//Algorithms-Doubly Linked List

class Node{
    constructor(element, next, prev){
        this.element=element;
        this.next=next;
        this.prev=prev;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.count=0;
    }

    //add to the end of the list
    append(element){
        let node= new Node(item);
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            node.prev=this.tail;
            this.tail.next=node;
            this.tail=node;
        }
    }

    appendAt(index, element){
        let current=this.head;
        let counter=1;
        let node= new Node (element);
        if(index==0){
            this.head.prev=node;
            node.next=this.head;
            this.head=node;
        }else{
            while(current){
                current=current.next;
                if(counter==index){
                    node.prev=current.prev;
                    current.prev.next=node;
                    node.next=current;
                    current.prev=node;
                }
                counter++;
            }
        }
    }

    remove(element){
        let current=this.head;
        while(current){
            if(current.data===element){
                //removing if only one node exists
                if(current==this.head && current==this.tail){
                    this.head=null;
                    this.tail=null;
                }else if (current==this.head){
                    this.head=this.head.next;
                    this.head.prev=null;
                }else if(current==this.tail){
                    this.tail=this.tail.prev
                    this.tail.next=null;
                }else{
                    current.prev.next=current.next;
                    current.next.prev=current.prev;
                }
            }
            current=current.next;
        }
    }

    removeAt(index){
        let current=this.head;
        let counter=1;
        if(index==0){
            this.head=this.head.next;
            this.head.prev=null;
        }else{
            while(current){
                current=current.next;
                if(current==this.tail){
                    this.tail=this.tail.prev;
                    this.tail.next=null;
                }else if(counter==index){
                    current.prev.next=current.next;
                    current.next.prev=current.prev;
                    break;
                }
                counter++;
            }
        }
    }

    reverse(){
        let current=this.head;
        let prev=null;
        while(current){
            let next=current.next;
            current.next=prev;
            current.prev=next;
            prev=current;
            current=next;
        }
        this.tail=this.head;
        this.head=prev;
    }

    swap(nodeOne, nodeTwo){
        let current=this.head;
        let counter=0;
        let firstNode;
        while(current !==null){
            if(counter==nodeOne){
                firstNode=current;
            }else if(counter==nodeTwo){
                let temp=current.element;
                current.element=firstNode.element;
                firstNode.element=temp;
            }
            current=current.next;
            counter++
        }
        return true;
    }

    length(){
        let current=this.head;
        let counter=0;
        while(current !==null){
            counter++;
            current=current.next;
        }
        return counter;
    }

    isEmpty(){
        return this.length()<1;
    }

    search(item){
        let current=this.head;
        let counter=0;

        while(current){
            if(current.data==item){
                return counter;
            }
            current=current.next;
            counter++
        }
        return false;
    }
}

var dll= new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);
dll.length();
dll.remove();
dll.search(20);
