// Server.js - This file is the initial starting point for the Node/Express server.

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));

// Starts the server to begin listening
// =============================================================
var server = app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

var io = require('socket.io')(server,{})

io.sockets.on('connection', (socket)=>{
    socket.on('test', function(data){
        console.log(data.text)
    })

})

// Routes
// =============================================================
require("./app/routes/html-routes.js")(app);


