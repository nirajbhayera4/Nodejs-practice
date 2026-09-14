
// ======================================================
// FILE SYSTEM (fs) MODULE IN NODE.JS
// ======================================================

// 1. IMPORT THE fs MODULE
const fs = require("fs");

// We also need the path module for section 8
const path1 = require("path");


// ======================================================
// 2. READ A FILE
// ======================================================

// readFile() is used to read a file asynchronously.

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("2. File content:");
    console.log(data);
});


// ======================================================
// 3. WRITE TO A FILE
// ======================================================

// writeFile() creates a new file if it doesn't exist.
// If the file already exists, it OVERWRITES its content.

// NOTE:
// We are using another file here so that we don't
// overwrite our original message.txt before reading it.

fs.writeFile("new-message.txt", "Hello Node.js!", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("3. File written successfully");
});


// ======================================================
// 4. APPEND TO A FILE
// ======================================================

// appendFile() ADDS content to the existing content.
// It does NOT delete the existing content.

fs.appendFile(
    "message.txt",
    "\nWelcome to backend development!",
    (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("4. Data added successfully");
    }
);


// ======================================================
// 5. DELETE A FILE
// ======================================================

// unlink() is used to delete a file.

// We will delete new-message.txt that we created above.

fs.unlink("new-message.txt", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("5. File deleted");
});


// ======================================================
// 6. CREATE A DIRECTORY
// ======================================================

// mkdir() creates a directory/folder.

// Using { recursive: true } prevents an error if the
// folder already exists.

fs.mkdir("logs", { recursive: true }, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("6. Directory created");
});


// ======================================================
// 7. READ THE CONTENTS OF A DIRECTORY
// ======================================================

// readdir() gives us the files and folders inside
// the specified directory.

// "." means the current directory.

fs.readdir(".", (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("7. Files and folders in current directory:");
    console.log(files);
});


// ======================================================
// 8. fs + path TOGETHER
// ======================================================

// path.join() safely creates a file path.

const filepath100 = path1.join(
    __dirname,
    "data",
    "users.txt"
);

console.log("8. File path:");
console.log(filepath100);

fs.readFile(filepath100, "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Users file content:");
    console.log(data);
});


// ======================================================
// 9. ASYNCHRONOUS vs SYNCHRONOUS
// ======================================================

// ASYNCHRONOUS
// ----------------
//
// Node.js starts reading the file and can continue
// doing other work while the file is being read.

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("9. Asynchronous read:");
    console.log(data);
});


// SYNCHRONOUS
// ----------------
//
// The program WAITS until the file is completely read.

const data = fs.readFileSync("message.txt", "utf8");

console.log("9. Synchronous read:");
console.log(data);

console.log("Program finished");

