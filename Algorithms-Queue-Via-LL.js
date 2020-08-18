//Algorithm-Queue-Via-LL

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.tail=null;
        this.head=null;
    }

    enqueue(element){
        let node= new Node(element);
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
    }

    dequeue(){
        if(!this.head){
            return "Empty"
        }else{
            let elementToPop=this.head
            this.head=this.head.next
            return elementToPop
        }
    }

    length(){
        let current, counter
        [current, counter]=[this.head, 0]
        while(current){
            counter++
            current=current.next
        }
        return counter
    }

    isEmpty(){
        return this.length()
    }

    peek(){
        if(this.head){
            return this.head.data
        }else{
            return "Empty"
        }
    }
}

let queue= new Queue();
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
queue.enqueue(40); 
queue.enqueue(50); 
queue.enqueue(60); 
queue.dequeue();
queue.length();
queue.isEmpty();
queue.peek();