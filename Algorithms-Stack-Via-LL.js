//Algorithm-Stack-Via-LL

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
    }

    push(element){
        let node= new Node(element)
        if(this.top){
            node.next=this.top
            this.top=node
        }else{
            this.top=node
        }
    }

    pop(){
        if(this.top){
            let elementToPop=this.top
            this.top=this.top.next
            return elementToPop.data
        }else{
            console.log("Stack is empty")
            return false;
        }
    }

    peek(){
        if(this.top){
            return this.top.data
        }else{
            return null;
        }
    }

    isEmpty(){
        return this.length>1
    }

    length(){
        let current=this.top
        let counter=0
        while(current){
            counter++
            current=current.next
        }
        return counter
    }

    search(element){
        let current=this.top
        while(current){
            if(current.data===element){
                return true
            }
            current=current.next
        }
        return false
    }

    reverse(){
        let current=this.top
        let prev=null;
        while(current){
            let next=current.next
            current.next=prev
            prev=current
            current=next
        }
        this.top=prev
    }
}

var stack=new Stack();
stack.isEmpty()
stack.push("Alex");
stack.peek();
stack.push("Brian");
stack.push("Cesar");
stack.push("Doug")
stack.pop();
stack.reverse();
stack.length();
