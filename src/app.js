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

4.//stop the program 
console.log("starting...");
//process.exit(); // after this anything wont execute
console.log("this wont execute");
// only prints the starting...
console.exit(0); // means success
console.exit(1); // means error


5.



