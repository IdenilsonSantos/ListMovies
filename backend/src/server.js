require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3333;
require('./app/config/db');

app.use(express.json());
app.use(cors());

app.listen(port, (err) => {
    if (!err) {
        console.log("Listening on:", port)
    }
    else {
        console.log("Error:", err.message)
    }
});
