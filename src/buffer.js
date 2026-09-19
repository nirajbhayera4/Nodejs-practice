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


4.//