require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URL;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(conn => {
    console.log("Connected on database server")
}).catch(error => {
    console.log("Not connected on database server: ", error.message)
});

module.exports = mongoose;