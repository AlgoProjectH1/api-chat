var io = require('socket.io');



/**
 * Config the app
 */
var controllers = {
    channel: require('./src/controllers/channel.js'),
    message: require('./src/controllers/message.js')
};
global.models {
    channels: require('./src/models/channels.js')
};



/**
 * Application events
 */
io.on('connection', function (socket) {
    socket.on('channel:join', controllers.channel.join);
    socket.on('message:add', controllers.message.add);
});



/**
 * Launch the app
 */
io.listen(1334);
