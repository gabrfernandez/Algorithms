//Queues-FIFO
//think of people standing in line
//using arrays to create queue is bad, because you need to shift entire array

//lookup O(n)
//enqueue (add), dequeue (remove first one), peek O(1)


class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value){
        const newNode= new Node(value);
        if(this.length===0){
            this.first=newNode;
            this.last=newNode;
        }else{
            this.last.next=newNode;
            this.last= newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.first===this.last){
            this.last= null;
        }
        //
        const holdingPointer=this.first
        this.first=this.first.next;
        this.length--;
        return this;
    }
    //isEmpty;
}
  
  const myQueue = new Queue();
  myQueue.enqueue('Adam');
  myQueue.enqueue('Bob');
  myQueue.enqueue('Charlie');
  myQueue.enqueue('Daniel');
  myQueue.dequeue();
  myQueue.peek();

//implement queue using stacks
class CrazyQueue {
    constructor() {
      this.first = [];
      this.last = [];
}
  
    enqueue(value) {
      const length = this.first.length;
      for (let i = 0; i < length; i++) {
        this.last.push(this.first.pop());
      }
      this.last.push(value);
      return this;
    }
  
    dequeue() {
      const length = this.last.length;
      for (let i = 0; i < length; i++) {
        this.first.push(this.last.pop());
      }
      this.first.pop();
      return this;
    }
    peek() {
      if (this.last.length > 0) {
        return this.last[0];
      }
      return this.first[this.first.length - 1];
    }
}
  
const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();