// BUFFERS in node.js 
// buffer is the data that isn't a normal text-- such as files, images, videos, network packets, and streams 

//1. Why do we need the buffers ?
/*
JavaScript normally works with strings:

const name = "Niraj";

But computers ultimately store data as bytes.

For example:

A → 65
B → 66
C → 67

An image isn't:

"my image"

It's a sequence of bytes:

10110100 01001101 11001010 ...

Node.js uses Buffer to work with this kind of raw binary data.*/

2.// creating a buffer 
const buffer=Buffer.from("hello");
console.log(buffer);

//output:
//<Buffer 48 65 6c 6c 6f>

3.// convert buffer back to text 

const buffer1=Buffer.from("hello");
console.log( buffer1);
//<Buffer 48 65 6c 6c 6f>
console.log(buffer1.toString());
//output:
//hello


4.//buffer is basicallly bytes 
// we can access the individual bytes in the buffer by using the index number
const buffer2=Buffer.from("hello");
console.log(buffer2[0]);
//output:
//68

5.// Buffer length 
const buffer3=Buffer.from("hello");
console.log(buffer3.length);
//output:
//5


6.// Buffer and fs--- it simply means the use case of the utf-8 encoding in the fs module

// without encoding 
const fs=require("fs");
fs.readFile("message.txt", (err,data)=>{
    console.log(data);
});

//---- here the data i buffer
// output :
//<Buffer 68 65 6c 6c 6f 20 69 73 68 65 6c 6c 6f>

// with encoding 
fs.readFile("message.txt", "utf-8", (err,data)=>{
    console.log(data);
});

//---- here the data i string
// output :
//hello is a string



7.// why buffers useful for large files ?
/*

Imagine a 2 GB video.

It would be inefficient to load the entire video into memory at once.

Instead, Node.js can process it in chunks:

2 GB Video
    ↓
┌────────┐
│ Buffer │  chunk 1
└────────┘
    ↓
┌────────┐
│ Buffer │  chunk 2
└────────┘
    ↓
┌────────┐
│ Buffer │  chunk 3
└────────┘
    ↓
   ...

This is closely related to Streams, which you'll learn next.
*/

