// what is streams?
// streams is a way to process the data piece by piece (in chunks) instead of loading the entire data into memory at once

// simple example--->
/*
imagine you have a 2gb video file 

without streams :
2 GB video
    ↓
Load entire 2 GB into memory
    ↓
Process it

------WITH STREAMS---------
2 GB video
    ↓
┌──────────┐
│ Chunk 1  │ → process
└──────────┘
┌──────────┐
│ Chunk 2  │ → process
└──────────┘
┌──────────┐
│ Chunk 3  │ → process
└──────────┘
      ...


*/


1.// WHY DO WE NEED THE STREAMS 
// suppose we do 
fs.readfile("movie.mp4", (err, data)=>{
    // entire movie is loaded here 

})

// here the node.js have to wait until the entire video is loaded here and then it will return it 

// with stream :
const stream=fs.createReadStream("movie.mp4");
// node.js reads the file in chunks :
/*
File
 ↓
Chunk 1
 ↓
Chunk 2
 ↓
Chunk 3
 ↓
...
*/


2.// Your first readable stream

// suppose there is a txt file called  message.txt
const fs=require("fs");
const stream1=fs.createReadStream("message.txt");
stream.on("data", (chunk)=>{
    console.log(chunk);
})
// output :
// <Buffer 68 65 6c 6c 6f 20 69 73 68 65 6c 6c 6f>

// this is because the data is in buffer format
// we can convert it to string by using the toString() method
console.log(chunk.toString());
// output :
// hello is a string



