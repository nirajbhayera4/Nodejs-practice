// in node js fs module(FILE SYSTEM MODULE) is a built in module that allows your node js program to work with the files and folders 

1. // import the fs module 
const fs=require("fs");

// there are certain methods inside this :
fs.readFile();
fs.writeFile();
fs.mkdir();
fs.rmdir();
fs.unlink();
fs.rename();

2.// read the file 
//----> you can read the file from this method
fs.readFile("message.txt", "utf8",(err,data)=>{
    if(err){
        console.log(err);
        return;

    }
    console.log(data);
})

// output---> 