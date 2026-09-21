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




4.// what is a route ?
// a route is specific url + http methods that tells the server what tp do when a request comes in.

// example 
app.get("/users", (req, res) => {
    res.send("All users");
});
// here the route is /users and the http method is get
// get method is used to fetch the data from the server

5.// what is routing ?
// it is the process od deciding which code should handle the particular request 

const express = require("express");

const app2= express();

app2.get("/", (req, res) => {
    res.send("Home Page");
});

app2.get("/about", (req, res) => {
    res.send("About Page");
});

app2.get("/users", (req, res) => {
    res.send("Users Page");
});

app2.listen(3000);
/*
http://localhost:3000/
        ↓
Home Page

http://localhost:3000/about
        ↓
About Page

http://localhost:3000/users
        ↓
Users Page
*/

// HTTP METHODS 
/*
Method	      Purpose
GET	          Get data
POST	      Create data
PUT	Update    data
PATCH	      Partially update data
DELETE	      Delete data
*/


6.// what is a middleware ?
// it is a function which runs between the incoming request and the final route handler 
// they act as security checkpoint 
// example 

const express=require("express");
const app3=express();

function checkuser(req,res,next){
    console.log("middleware executed");
    next();
}

app.get("profile",checkuser,(req,res)=>{
    res.send("profile page");
});
app3.listen(3000); //output: middleware executed  profile page

// so when we visit GEET/profile 
/*
Request
   ↓
checkUser()
   ↓
next()
   ↓
/profile handler
   ↓
"Profile page"
*/

9.// why we needn the middleware ?
// it is useful for the things that should happen before a route runs

// example 
1.// LOGGING

function logger(req,res,next){
    console.log(req.method, req.url);
    next();
}

2.// AUTHENTICATION
// it is used to verify the identity of the user
function auth(req,res,next){
    console.log("auth middleware");
    next();
}

3.// PARSING JSON
// it is used to parse the JSON request bodies
function jsonParser(req,res,next){
    console.log("json parser middleware");
    next();
}

10.// WHAT ARE THE CONTROLLERS ?
// controllers are the functions that handle the requests and send the responses
// controllers is a function that contains the actual bussiness logic for handling the requests

// without controllers, we might write everything isnide our route 
app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    // Find user
    // Check password
    // Generate JWT
    // Send response

});

// this works but it is not scalable 

// with controllers , we separate the logic 
/*
project/
│
├── routes/
│   └── authRoutes.js
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   └── authMiddleware.js
│
└── app.js
*/


// suppose there is a login router 
router.post("login", login);

// when the post/ login comes in, cal login

// login controller
const login=async (req, res)=>{
    const { email, password}=req.body;

    // find the user 
    // check pass
    // generate jwt 

    res.json({
        message: "login successful"
    });
};



