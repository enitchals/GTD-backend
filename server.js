const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CORS = require('cors');

const server = express();
const port = 9001;

const routes = require ('./api/routes/routes');

const corsOptions = {
    origin: '*',
    methods: 'GET, HEAD, POST, PUT, PATCH, DELETE',
    preFlightContinue: false,
    optionsSuccessStatus: 204
};

mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017');

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

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});