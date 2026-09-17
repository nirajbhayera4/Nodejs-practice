## event emitter 
// it is a mechanism in node.js that allows one part of your program to emit (send) events to other parts  of your program and another part listns for and responds to that event.

## understand the on() and emit() methods

on() method is used to listen for events and emit() method is used to trigger events.

on() means "listen for this event"
emit() means "this event has happened"

# passing the data with an event
const EventEmitter=require("events");
const emitter= new EventEmitter();
emitter.on("message",(username)=>{
    console.log(username + " logged in" );
})
emitter.emit("message", "john");

// output---->
// john logged in
