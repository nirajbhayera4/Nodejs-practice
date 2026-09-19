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


4.// the data event---> important stream events 

stream.on("data", (chunk)=>{
    console.log(chunk.toString);
})

/*
File:
"ABCDEFGHIJK"

       ↓

Chunk 1 → "ABC"
Chunk 2 → "DEF"
Chunk 3 → "GHI"
Chunk 4 → "JK"
*/

5.// the end event----> when there is no more data 
stream.on("end",()=>{
    console.log("no more data");
})

// data → data → data → data → end

6.// THE ERROR EVENT----> what if the file doesn't exist ? 

stream.on("error", (err)=>{
    console.log("error:", err.message);

})


7.// FOUR TYPES OF STREAMS

//7.1. readable------> used to read the data 
fs.createReadStream("message.txt"); // File → Application

//7.2 writable------> used to write the data 
fs.createWriteStream("message.txt"); // Application → File

//7.3 duplex------> used to read and write the data 
fs.createReadStream("message.txt"); // File → Application
fs.createWriteStream("message.txt"); // Application → File
fs.createlexStream("message.txt"); // File → Application → File

//7.4 transform------> used to transform the data
const transformStream=fs.createTransformStream();
transformStream.on("data", (chunk)=>{
    console.log(chunk.toString());
})

// it changes the data while it passes through 
// example 
/*
Large data
    ↓
Compression Stream
    ↓
Smaller data*/
// example
transformStream.on("data", (chunk)=>{
    console.log(chunk.toString());
}) // means the transform stream is compressing the data while it passes through





