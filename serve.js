//serve-json.js
var http = require('http');
var fs = require('fs');

//server config
const host = 'localhost';
const port = 4000;

// create data
const json_response = require('./data.json');

const requestListener = function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end( JSON.stringify(json_response) ); 
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running @ http://${host}:${port}`);
});
