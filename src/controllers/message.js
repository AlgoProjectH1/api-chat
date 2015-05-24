var Message = {};

/**
 * Post a message to a channel
 * @param object datas
 */
Message.add = function (socket, datas) {
    var gameID = datas.gameID;
    var user = socket.id;
    var message = datas.message;
    var channels = global.models.channels;

    // Forward the message to the adversary
    channels.getAdversary(gameID, user, function (adversary) {
        adversary.socket.emit('message:new', JSON.stringify({
            message: message,
            user: datas.user.username
        }));
    });
};


module.exports = Message;
