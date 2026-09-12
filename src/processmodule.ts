// process objects is global objects that gives you information about and controls the current node.js process 

// env variable 
// some secrets like pass or sensitive info , we dont hardcode in your file so we store them in env file 
// command line arguments 
// exit code 
// process lifecycle events 
// read backend port from the env file 
// read secrets - db url, db pass, db user
// read CLI arguments - port, env, db host

// process.env 


console.log(process);
// what will be the output of this code ?
// process object is a global object that is available in all files in node.js

1. //COMMAND LINE ARGUMENTS ---- very commonly used 

// suppose you run ----
// node app.js Niraj 3000
console.log(process.argv);
/* output will be----[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\project\\app.js',
  'Niraj',
  '22'
]
  */

/* the first two values are node.js/ program informations*/
// actual arguments starts from the index 2
console.log(process.argv[2]); // niraj 
console.log(process.argv[3]); //22

// EXAMPLE 
const name1=process.argv[2];
console.log(`hello ${name1}`);

2.// env variables ----used heavily for
// API keys, database urls,pass,configs,PORT


3.//current working directory 
console.log(process.cwd());

// it tell the directory from where the node.js was started 

4.// stop the program 
process.exit(0);



