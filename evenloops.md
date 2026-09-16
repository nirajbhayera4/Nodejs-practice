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


# 3.event loop flow 

javascript code 
|------------------|
|------------------|
|------------------|
|------------------|
call stack
|------------------|
|------------------|
node.js handles async work 
|------------------|
|------------------|
callback queue
|------------------|
|------------------|
|------------------|
|------------------|
event loop
|------------------|
|------------------|
call stack

## 4. Example with setTimeout
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");

Many beginners expect:

1
2
3

But the output is:

1
3
2

Why?

Step-by-step

First:

console.log("1");

Call Stack:

console.log("1")

Output:

1

Then:

setTimeout(..., 0);

Node.js registers the timer and continues.

It doesn't mean "execute immediately."

Then:

console.log("3");

Output:

3

Once the current JavaScript execution finishes, the timer callback can be processed.

So:

1
3
2

## 5. Very important: 0ms doesn't mean immediately-----0ms baad dubara is function pe ayega


This:

setTimeout(() => {
    console.log("Hello");
}, 0);

does not mean:

Execute Hello right now.

It means approximately:

Run this callback after the timer becomes eligible, when the event loop gets an opportunity to execute it.

For example:

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");

Output:

Start
End
Timer
 
## 7. Call Stack vs Event Loop

These two are important:

Call Stack

Keeps track of what JavaScript is currently executing.

Event Loop

Keeps checking:

"Is the Call Stack free? Is there some asynchronous work ready to continue?"

Simplified:

             Call Stack
                 ↑
                 │
             Event Loop
                 ↑
                 │
       Callback / async work

## 8. A simple real-world analogy

Imagine you're a waiter in a restaurant.

You take an order from Customer A:

Customer A → "Give me pizza."

You don't stand in the kitchen waiting for the pizza.

Instead:

Take order
   ↓
Send order to kitchen
   ↓
Serve Customer B
   ↓
Serve Customer C
   ↓
Pizza ready
   ↓
Give pizza to Customer A

That's basically the idea behind asynchronous Node.js.

The Event Loop is like the waiter coordinating what needs attention next.





