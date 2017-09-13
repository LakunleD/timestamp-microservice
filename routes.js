const moment = require('moment');


let routes = function (server, mongodb) {
    
    server.route({
        method:'GET',
        path:'/{date}',
        handler: function (request, reply) {
            let date = request.params.date;

            if(isNaN(date)){
                let time = new Date(date).getTime();
                if(isNaN(time)){
                    reply({unix: null, natural: null});
                }
                else {
                    reply({unix: time, natural: date});
                }
            }
            else {
                let newDate = new Date(parseInt(date));
                reply({1:3, unix: date, natural: newDate.toLocaleDateString()});
            }

        }
    })
    
    
}

module.exports = routes;