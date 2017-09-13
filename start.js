'use strict';
const Hapi = require("hapi");
const server = new Hapi.Server();
const corsHeaders = require('hapi-cors-headers');

let routes = require('./routes');

server.connection({
    "port": 9999,
    "routes": {
        "cors": {
            "headers": ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language", "Origin"],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
});

server.ext('onPreResponse', corsHeaders)

addRoutes(server);

startServer(server);

function addRoutes(server) {
    routes(server);
}


function startServer(server) {
    server.start(function () {
        console.log('Server running at: ' + server.info.uri);
        server.log('info', 'Server running at: ' + server.info.uri);
    });
}
