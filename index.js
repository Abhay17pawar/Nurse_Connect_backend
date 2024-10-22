const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
app.use(cors()); 
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI

app.post('/api/emergency', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Emergency at location: Latitude: ${latitude}, Longitude: ${longitude}`);
    
    res.status(200).send('Location received');
  });

mongoose.connect(MONGO_URI)
   .then(() => {console.log("mongoDB server is connected!")})
   .catch((error) => {console.error("error connecting to mongoDB")})


app.listen(PORT, console.log("server is listening on port 3000..."))
   