const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname + "/client/static")));
app.use(express.static(path.join(__dirname, "./public/dist/public")));

require("./server/config/mongoose");
require("./server/config/routes")(app);

var server = app.listen(3000);    