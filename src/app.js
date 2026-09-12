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
process.stdout.write("hello world");
//similar to console.log()
// process.stdin.write("hello world");
//similar to console.log()