// the path modules is a built in module used for working with the file and directory paths.
// you can use it when u need to :
//1. join paths
//2. find the filename
//3. find the extension
//4. get he directory name 
//5. get the absolute path
//6. normalize paths
//7. work with paths safely across windows/ linux/ windows.

// YOU DONT NEED TO INSTALL ANYTHING 

//1. IMPORT THE "PATH" MODULE

// in commmon js --->
const path1=require("path");
// in ES modules---->
import anypath3 from "path";

//but in node js , we'll commonly see---->

const path2=require("path");

//2. PATH.JOIN()---->one of the most used methods
const path3=require("path");

const anypath1=require("path");

//2. PATH.JOIN()---->one of the most used methods
const anypath0=require("path");

const result=path1.join("users", "niraj","documents");
console.log(result);

// on windows 
//users\niraj\documents
// on macos\linux
//users/niraj/documents

// WHY WE USE THE PATH JOIN ?
// instead of manually doing----->
const filepath1="users/" + "niraj/" +"documents";
// we use ------>
const filepath=path1.join("users", "niraj", "documents"); //---> here the node will automatically uses the coreect path separator for the OS

//3. path.basename()---> get the file name from the path
const anypath=require("path");
const filepath0="C:\\Users\\niraj\\Desktop\\Nodejs%20practice\\src\\pathmodule.ts";
console.log(anypath.basename(filepath0));

//4. path.dirname()---------> gets the directory/folder part 
const filePath = "C:\\Users\\niraj\\Desktop\\Nodejs%20practice\\src\\app.js";

console.log(path1.dirname(filePath));

//5. path.extname()---------> gets the file extension
console.log(path1.extname(filePath)); //output .js

6.//path.parse()---------> parses the path into an object
console.log(path1.parse(filePath));

7.// path resolve----> creates an absolulte path 
console.log(path1.resolve(filePath));

8.//path is absolute----> checks if the path is absolute absolute path
console.log(path1.isAbsolute(filePath));

9.//real world example with __dirname
//--> suppose there is a project folder with the following structure:
// project/
//app.js--->data/users.json

// you can create the path to users.json
const examplepath=require("path");
const filepath8=path1.join(__dirname, "data", "users.json");
console.log(filepath8);


