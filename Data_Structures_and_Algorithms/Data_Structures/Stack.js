//Stack-LIFO
//linear data structure, traverse sequentially 
//difference between stacks and queues are removal only
//no random access, think of plates
//can be implemented with arrays or linked lists 

//arrays are faster due to locality, but has static memory
//linked lists have extra memory, but have dynamic memory to add

//lookup is O(n)
//pop, push, peek are O(1)

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}
// via linked list
class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value){
        const newNode= new Node(value);
        if (this.length==0){
            this.top=newNode;
            this.bottom=newNode;
        }else{
            const holdingPointer= this.top;
            this.top=newNode;
            this.top.next= holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.top){
            return null;
        }
        if(this.top===this.bottom){
            this.bottom=null;
        }
        const holdingPointer=this.top;
        this.top=this.top.next;
        this.length--;
        return this;
    }
    //isEmpty
}
  
  const myStack = new Stack();
  myStack.push('amazon');
  myStack.push('discord');
  myStack.push('google')
  myStack.pop();
  myStack.peek();

//via arrays 
class Stack {
    constructor(){
      this.array=[];
    }
    peek() {
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
    }
    //isEmpty
}

const myStack = new Stack();
  myStack.push('amazon');
  myStack.push('discord');
  myStack.push('google')
  myStack.pop();
  myStack.peek();
