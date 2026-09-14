
// ======================================================
//              NODE.JS PROCESS OBJECT
// ======================================================

// process is a global object in Node.js.
// It gives us information about and control over
// the current Node.js process.


// ======================================================
// 1. COMMAND LINE ARGUMENTS
// ======================================================

// Run:
// node app.js Niraj 3000

/*
console.log(process.argv);

const name1 = process.argv[2];

console.log(`Hello ${name1}`);
*/


// ======================================================
// 2. ENVIRONMENT VARIABLES
// ======================================================

// Environment variables are used for configuration
// and sensitive information such as:
// PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME

// Example .env:
// PORT=5000
// DB_USER=admin
// DB_PASSWORD=secret
// DB_HOST=localhost
// DB_NAME=mydatabase

console.log("PORT:", process.env.PORT);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);

// Run with:
// node --env-file=.env app.js


// ======================================================
// 3. CURRENT WORKING DIRECTORY
// ======================================================

// process.cwd() returns the directory from which
// the Node.js process was started.

console.log("Current working directory:");
console.log(process.cwd());


// ======================================================
// 4. STOP THE PROGRAM
// ======================================================

/*
console.log("Starting...");

process.exit(0);

// Anything after process.exit() will not execute.

console.log("This won't execute");

// 0 = successful exit
// 1 = error exit
*/


// ======================================================
// 5. process.exitCode
// ======================================================

// Sets the exit code without immediately stopping
// the program.

// 0 = success
// non-zero = usually indicates an error

// process.exitCode = 1;

// NOTE:
// Keep this commented while practicing because it will
// make your program finish with exit code 1.


// ======================================================
// 6. process.version
// ======================================================

console.log("Node.js version:");
console.log(process.version);

// To see versions of Node.js dependencies:
console.log("Node.js versions:");
console.log(process.versions);


// ======================================================
// 7. process.platform
// ======================================================

// Tells us which operating system Node.js is running on.

console.log("Operating system:");
console.log(process.platform);

// Windows -> win32
// Linux   -> linux
// macOS   -> darwin


// ======================================================
// 8. process.pid
// ======================================================

// Every running Node.js process has a unique Process ID.

console.log("Process ID:");
console.log(process.pid);


// ======================================================
// 9. process.memoryUsage()
// ======================================================

// Shows memory used by the Node.js process.

console.log("Memory usage:");
console.log(process.memoryUsage());


// ======================================================
// 10. process.stdin and process.stdout
// ======================================================

// stdout = standard output

process.stdout.write("Hello World\n");

// stdout.write() is similar to console.log()
// but does not automatically add a new line.

// stdin is used to receive input from the terminal.
// We will learn this separately.


// ======================================================
//              PATH MODULE
// ======================================================

// Import the path module ONCE.
// This avoids duplicate declarations.

const path = require("path");


// ======================================================
// 11. path.basename()
// ======================================================

// Gets the filename from a path.

const filePath =
    "C:\\Users\\niraj\\Desktop\\Nodejs practice\\src\\app.js";

console.log("Filename:");
console.log(path.basename(filePath));

// Output:
// app.js


// ======================================================
// 12. path.dirname()
// ======================================================

// Gets the directory/folder part of a path.

console.log("Directory:");
console.log(path.dirname(filePath));

// Output:
// C:\Users\niraj\Desktop\Nodejs practice\src


// ======================================================
// 13. path.extname()
// ======================================================

// Gets the file extension.

console.log("File extension:");
console.log(path.extname(filePath));

// Output:
// .js


// ======================================================
// 14. path.parse()
// ======================================================

// Breaks a path into an object.

console.log("Parsed path:");
console.log(path.parse(filePath));

// Example output:
//
// {
//   root: 'C:\\',
//   dir: 'C:\\Users\\niraj\\Desktop\\Nodejs practice\\src',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'
// }


// ======================================================
// 15. path.resolve()
// ======================================================

// Creates an absolute path.

console.log("Resolved path:");
console.log(path.resolve(filePath));


// ======================================================
// 16. path.isAbsolute()
// ======================================================

// Checks whether a path is absolute.

console.log("Is absolute path?");
console.log(path.isAbsolute(filePath));

// Output:
// true


// ======================================================
// 17. path.join()
// ======================================================

// Joins multiple path segments together.

const usersFilePath = path.join(
    __dirname,
    "data",
    "users.txt"
);

console.log("Users file path:");
console.log(usersFilePath);


// ======================================================
//              FILE SYSTEM (fs) MODULE
// ======================================================

// Import fs ONCE.

const fs = require("fs");


// ======================================================
// 18. READ A FILE
// ======================================================

// readFile() reads a file asynchronously.

fs.readFile("message.txt", "utf8", (err, data) => {

    if (err) {
        console.log("Error reading message.txt:");
        console.log(err.message);
        return;
    }

    console.log("18. File content:");
    console.log(data);
});


// ======================================================
// 19. WRITE TO A FILE
// ======================================================

// writeFile() creates a new file if it doesn't exist.
// If the file already exists, it OVERWRITES it.

fs.writeFile(
    "new-message.txt",
    "Hello Node.js!",
    (err) => {

        if (err) {
            console.log("Error writing file:");
            console.log(err.message);
            return;
        }

        console.log("19. File written successfully");


        // ==================================================
        // 20. DELETE THE FILE
        // ==================================================

        // We delete the file AFTER it has been created.
        // This prevents a race condition.

        fs.unlink("new-message.txt", (err) => {

            if (err) {
                console.log("Error deleting file:");
                console.log(err.message);
                return;
            }

            console.log("20. File deleted");
        });
    }
);


// ======================================================
// 21. APPEND TO A FILE
// ======================================================

// appendFile() ADDS content to an existing file.
// It does NOT delete the existing content.

fs.appendFile(
    "message.txt",
    "\nWelcome to backend development!",
    (err) => {

        if (err) {
            console.log("Error appending file:");
            console.log(err.message);
            return;
        }

        console.log("21. Data added successfully");
    }
);


// ======================================================
// 22. CREATE A DIRECTORY
// ======================================================

// mkdir() creates a directory/folder.

// recursive: true means:
// If the folder already exists, don't throw an error.

fs.mkdir(
    "logs",
    { recursive: true },
    (err) => {

        if (err) {
            console.log("Error creating directory:");
            console.log(err.message);
            return;
        }

        console.log("22. Directory created");
    }
);


// ======================================================
// 23. READ DIRECTORY CONTENTS
// ======================================================

// readdir() reads the files and folders
// inside a directory.

// "." means the current directory.

fs.readdir(".", (err, files) => {

    if (err) {
        console.log("Error reading directory:");
        console.log(err.message);
        return;
    }

    console.log("23. Files and folders:");
    console.log(files);
});


// ======================================================
// 24. fs + path TOGETHER
// ======================================================

// path.join() creates a safe file path.
//
// __dirname = directory where app.js is located.
//
// data = folder
//
// users.txt = file

const usersFile = path.join(
    __dirname,
    "data",
    "users.txt"
);

console.log("24. Users file path:");
console.log(usersFile);


// Read the users.txt file using the path created above.

fs.readFile(
    usersFile,
    "utf8",
    (err, data) => {

        if (err) {
            console.log("Error reading users.txt:");
            console.log(err.message);
            return;
        }

        console.log("Users file content:");
        console.log(data);
    }
);


// ======================================================
// 25. ASYNCHRONOUS FILE READING
// ======================================================

// readFile() is asynchronous.
//
// Node.js starts reading the file and can continue
// doing other work while the file is being read.

fs.readFile(
    "message.txt",
    "utf8",
    (err, data) => {

        if (err) {
            console.log("Error:");
            console.log(err.message);
            return;
        }

        console.log("25. Asynchronous read:");
        console.log(data);
    }
);


// ======================================================
// 26. SYNCHRONOUS FILE READING
// ======================================================

// readFileSync() is synchronous.
//
// The program WAITS until the file has been completely
// read before continuing.

try {

    const syncData = fs.readFileSync(
        "message.txt",
        "utf8"
    );

    console.log("26. Synchronous read:");
    console.log(syncData);

} catch (err) {

    console.log("Error reading file synchronously:");
    console.log(err.message);
}


// ======================================================
// PROGRAM FINISHED
// ======================================================

console.log("Program finished");
