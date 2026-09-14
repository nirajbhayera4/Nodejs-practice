// COMMAND LINE ARGUMENTS
/*
console.log(process.argv);

const name1 = process.argv[2];

console.log(`Hello ${name1}`);
*/

// env variables
console.log(process.env.PORT);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_HOST);
console.log(process.env.DB_NAME);

3.//current working directory 
console.log(process.cwd());

/*
4.//stop the program 
console.log("starting...");
//process.exit(); // after this anything wont execute
console.log("this wont execute");
// only prints the starting...
console.exit(0); // means success
console.exit(1); // means error
*/


5.//process.exitcode
// instead of immediately stopping the code
process.exitCode=1;


6.//process.version
console.log(process.version);
// and if want to see more versions 
console.log(process.versions);

7.//process platform ----tells you the operating system
console.log(process.platform);

8.//process pid---every running process has a unique process id that is PID
console.log(process.pid);
// useful when working with the server and system processes 

9.//process memoryUsage()---shows how much memory the node.js process is using 
console.log(process.memoryUsage());
// useful when debugging memory problems 

10.//process.stdin and process.stdout--- represents the standard input and output 
process.stdout.write("hello world\n");
//similar to console.log()
// process.stdin.write("hello world");
//similar to console.log()


//------------------------------------------------PATH MODULES------------------------
3.// path.basename()

const anypath=require("path");
const filepath0="C:\\Users\\niraj\\Desktop\\Nodejs%20practice\\src\\app.js";
console.log(anypath.basename(filepath0));


4.//4. path.dirname()---------> gets the directory/folder part 
const filePath = "C:\\Users\\niraj\\Desktop\\Nodejs%20practice\\src\\app.js";

console.log(anypath.dirname(filePath)); //output C:\\Users\\niraj\\Desktop\\Nodejs%20practice\\src


5.//5. path.extname()---------> gets the file extension
console.log(anypath.extname(filepath0)); //output .js

6.//path.parse()---------> parses the path into an object
console.log(anypath.parse(filepath0)); //-----> give in object form 


7.//path resolve--->  creates an absolute path from a relative path or a string of paths
console.log(anypath.resolve(filePath));
// output C:\\Users\\niraj\\Desktop\\Nodejs%20practice\\src\\app.js

8.// path is absolute----> checks if the path is absolute absolute path
console.log(anypath.isAbsolute(filePath));

9.//real world example with __dirname
//--> suppose there is a project folder with the following structure:
// project/
//app.js--->data/users.json

// you can create the path to users.json 
const path1=require("path");
const filepath8=path1.join(__dirname, "data", "users.json");
console.log(filepath8);
//output C:\\Users\\niraj\\Desktop\\Nodejs%20practice\\src\\data\\users.json


//------------------------------------------------FILE SYSTEM MODULES------------------------

1.// import the fs module 
const fs=require("fs");

2.//read the file 
//----> you can read the file from this method
fs.readFile("message.txt", "utf8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})
