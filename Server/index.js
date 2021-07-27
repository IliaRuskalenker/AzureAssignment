const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const loginRoute = require('../Server/routers/login')

var PORT = process.env.Port || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(loginRoute)

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });