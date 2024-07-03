const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require("dotenv");
const mysql = require('mysql2/promise');
const connection = require('./config/db');
const routerStadium = require("./routes/stadiumRoutes")
const cors = require("cors");
dotenv.config();

// Middleware
app.use(morgan('combined')); // log HTTP requests
app.use(express.urlencoded({extended: true}))
app.use(morgan('combined'));
app.use(cors())
app.use(express.json()); // parse json bodies in the request object
async function connectToDatabase(){
       console.log("connect to mysql");
       return connection;
} 
connectToDatabase()

app.use("/stadium", routerStadium)

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
  
    res.status(500).json({
      message: "Something went rely wrong",
    });
  });


app.listen(8000, function(){
    console.log("Server is running...");
});