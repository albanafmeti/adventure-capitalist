const express = require('express');
const app = express();
require('dotenv').config();
const servePort = 80;

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', require('./socket'));

// General Middleware
app.use(require('./http/middleware/bearer-token'));

// Enable CORS.
let cors = require('cors');
app.use(cors());

// Parse cookies
let cookieParser = require('cookie-parser');
app.use(cookieParser());

// Parse request body.
let bodyParser = require('body-parser');
app.use(bodyParser.json({type: 'application/json'}));

app.use('/api', require('./http/routes'));

app.use(require('./http/middleware/error-handler'));

server.listen(servePort, function () {

    console.log(`The server is running on port ${servePort}.`);

    require('./database/connection').connect();
});
