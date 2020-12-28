//How does JavaScript Work?

//What is a program?
//allocate memory, Parse and execute

//javascript Engine (chrome's v8) has two parts: memory heap and call stack
//memory heap is where memory allocation happens
//call stack reads and executes code

//Javascript is a single threaded language that can be non-blocking
//(one call stack, can only do one thing at a time)

//Synchronous programming- operations block instructions until the task is completed
//asynchronous programming -operations can execute without blocking other operations, 
//generally completed by firing an event or by calling a provided callback function

//memory allocation 
const a =1;
const b=10;
const c=100;

//memory leak- unused memory or variables and fill up memory heap 

//call stack- 
console.log('1');
console.log('2');
console.log('3');

const one=()=>{
    const two=()=>{
        console.log('4')
    }
    two();
}
//call stack
//console.log('4')
//two()
//one()

//JavaScript run-time environment
//on top of the engine, they have web apis(dom, ajax, timeout), callback queue (event listener), event loop

