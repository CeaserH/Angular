const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname + "/client/static")));
app.use(express.static(path.join(__dirname, "./public/dist/public")));
app.use(bodyParser.json());

require("./server/config/mongoose");
require("./server/config/routes")(app);
require("./server/models/task");

var server = app.listen(3000);    