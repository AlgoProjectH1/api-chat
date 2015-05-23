var io = require('socket.io');



/**
 * Config the app
 */
var controllers = {
    join: require('./src/controllers/join.js')
};
global.models {
    channels: require('./src/models/channels.js')
};



/**
 * Application events
 */
io.on('connection', function (socket) {

    socket.on('channel:join', controllers.join);
});



/**
 * Launch the app
 */
io.listen(1334);
