var express = require("express")

var port = 2021
var app = express

app.listen(port, function() {
    console.log("Server chay tai: " + port);
})