const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CORS = require('cors');

const server = express();
const port = process.env.PORT || 9001;

const routes = require ('./api/routes/routes');

const corsOptions = {
    origin: '*',
    methods: 'GET, HEAD, POST, PUT, PATCH, DELETE',
    preFlightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
};

mongoose.Promise = global.Promise;
// THIS IS AN MLAB MONGO SERVER:
mongoose.connect('mongodb://nitchals-gtd:getting-things-done-CS4@ds153577.mlab.com:53577/nitchals-gtd');


server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
server.use(bodyParser.json());
server.use(CORS(corsOptions));

routes(server);

server.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});