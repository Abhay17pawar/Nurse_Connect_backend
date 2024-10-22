const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI

mongoose.connect('mongodb+srv://abhaypawar592:KgblgeXNHW2nm1S7@cluster0.5elwj.mongodb.net')
   .then(() => {console.log("mongoDB server is connected!")})
   .catch((error) => {console.error("error connecting to mongoDB")})

app.listen(PORT, console.log("server is listening on port 3000..."))
   