const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000);

//1. what is express ?
// express js is a web framework for node.js that makes it easier to build web servers and API'S

// think of it like 
//node js provides the runtime and express js makes the building the http api's easoer 

// without express , node js can create a server directly
const http=require("http")
const server=http.createServer((req,res)=>{
    res.end("hello world");
});
server.listen(3000);

// it works but handling the many routes and requests becomes harder 

// with express 
const express = require("express");
const app1=express();
app.get("/",(req,res)=>{
    res.send("hello world");
}); 
app1.listen(3000);// it is much simpler 

2. // what does the expesss give you?

2.1// ROUTES--- we can easily creates the different url's 
app.get("/users", (req, res) => {
    res.send("All users");
});

app.post("/users", (req, res) => {
    res.send("Create user");
});

//GET  /users  → Get users
//POST /users  → Create user


2.2// REQUEST AND RESPONSE HANDLING 
app.get("/profile", (req, res) => {
    console.log(req);
    res.json({
        name: "Niraj"
    });
});

2.3// MIDDLEWARES-- it allows the  express to understand the JSON request bodies 

2.4// API'S 
/*
POST /signup
POST /login
GET  /users
GET  /profile
PUT  /profile
DELETE /account
*/


3.// Why expess js?
// we use express js because building a backend server directly with node.js is possible , but express makes it much easier and cleaner 

1.// easy routing
2.// middleware
3.// easy api development
4.// handles http req and res 
5.// huge node.js ecosystem


