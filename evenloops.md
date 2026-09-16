## what is an event loop ?
an event loop is a mechanism that allows the node.js to handle the asynchronous operations without blocking the main thread.


## example
console.log("start");
setTimeout(() => {
    console.log("timer finished");
}, 2000);
console.log("end");

## output -->node js dont wait for 2 seconds there so it prints the next line 
start 
end
timer finished

## 1. node.js is single threaded
node.js uses the asynchronous api to handle the asynchronous operations. it means that it will not block the main thread while it is running the code.

example  ---->
## const data=readFile();

if reading a large file took 5 seconds, your entire application would have to wait.


## 2. synchronous vs asynchronous operations
exampple------>
## synchronous operation
console.log("a");
const result=somellongtask();
console.log("b");

here----> node.js waits for the somellongtak() to finish 
## asynchronous operation
console.log("a");
setTimeout(() => {
    console.log("timer finished");
}, 2000);
console.log("b");

here---> the setTimeout() is an asynchronous operation. it means that it will not block the main thread while it is running the code.










