require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const route = require('./routes');
const 
let users = []; // id, name, email, address

app.use(bodyParser.json());


//middleware
app.use((req, res, next) => {
  console.log("This is a middleware");
  next();
});

app.use(logMiddleware);
app.use("/", route);
//crud


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
