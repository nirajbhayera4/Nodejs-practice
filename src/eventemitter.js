// simple example 
//1. node.js provides the eventemitter through the events module 

const EventEmitter=require("events");
const emitter= new EventEmitter();

// now we can create a event lister :
emitter.on("message", ()=>{
    console.log("message received");
});

// output---->
// message received

//2. understand the on() and emit() methods

//on() means
emitter.on("message", ()=>{
    console.log("message received");

});

//emit() means
emitter.emit("message");

// output---->
// message received

//---------PASSING THE DATA WITH AN EVENT--------------
const EventEmitter=require("events");
const emitter1= new EventEmitter();
emitter1.on("message",(username)=>{
    console.log(username + " logged in" );
});

emitter1.emit("message", "john");

// output---->
// john logged in

//4. multiple listeners
//------one event have multiple listeners------
emitter1.on("message",(username)=>{
    console.log(username + " logged in" );
});
emitter1.on("message",(username)=>[
    console.log(username + "doing some activity")
])
emitter1.emit("message", "jane");
// output---->
//jane logged in
// jane doing some activity


//5. once() ---- sometimes you just want  a listnere to execute the callback once even after calling multiplet times 
emitter1.once("message",(username)=>{
    console.log(username + "doing some activity")
})
emitter1.emit("message", "jane");
emitter1.emit("message", "jane");

// output---->

// jane doing some activity---output will be only once

// on() runs everytime the event occurs 
// once() runs only once


//6. eventemitter with real world example 
// imagine an online store 
//---------order placed event
// order placed event----> send email
//                   ----> update stock 
//                   ----> create invoice 


const orderevents=new EventEmitter();
orderevents.on("orderplaced", (orderid)=>{
    console.log("sending confirmation email....");
});
orderevents.on("orderplaced", (orderid)=>{
    console.log("updating inventory....");
});
orderevents.on("orderplaced", (orderid)=>{
    console.log("creating invoice....");
});
orderevents.emit("orderplaced", "123456");

// output---->
// sending confirmation email....
// updating inventory....
// creating invoice....


//7. event emitter and callbacks
// we might notice something :
emitter.on("login", (username)=>{
    console.log(username);
})
// the username function is actually a callback function, so the eventemitter uses the callback internally 

8.// event emitter and event loop 
// these two are different
// EVENT EMITTER ------> responsible for events and listeners
// EVENT LOOP----------> responsible for managing when the js can execute the asynchronous code


9.// node js uses the eventemitter everywhere
// many node.js API's are based on events 

// for example, HTTPS servers
const http=require("http");
const server=http.createServer((req, res)=>{
    res.end("hello world");
})
server.listen(3000);
// output---->
// Server is running on port 3000


//Things like servers, streams and some other node.js API's uses the event driven patterns.