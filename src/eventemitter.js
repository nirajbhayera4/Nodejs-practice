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
