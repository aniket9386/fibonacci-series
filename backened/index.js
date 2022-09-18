require('dotenv').config();

const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();
const app = express();
const port = process.env.PORT;

app.use(cors());


app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth'))


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})