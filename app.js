
//app.js
const express = require("express");
var path = require("path");

const rabbitControllers = require("./rabbits/controllers/rabbits.controllers")

const app = express()
const port = 7070

// Ejs config
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, './rabbits/views'))

/* Controllers */
app.use("/rabbits", rabbitControllers)

app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`))