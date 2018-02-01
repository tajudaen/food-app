var app = require("./server/server.js");
var express = require("express");

app.use(express.static(__dirname + "/www"));

app.listen(3000, (err) => {
    if(err) {
        return err;
    }
    
    console.log("reading loud and clear....");
})
