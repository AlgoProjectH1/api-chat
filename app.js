var io = require('socket.io')(process.env.PORT || 1334);


/**
 * Config the app
 */
var controllers = {
    channel: require('./src/controllers/channel.js'),
    message: require('./src/controllers/message.js')
};
global.models = {
    channels: require('./src/models/channels.js')
};



/**
 * Application events
 */
io.on('connection', function (socket) {

    socket.on('channel:join', function (datas) {
        controllers.channel.join(socket, datas);
    });

    socket.on('message:add', function (datas) {
        controllers.message.add(datas);
    });

    socket.on('disconnect', function () {
        global.models.channels.delete(socket);
    });
});
