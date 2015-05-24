var Channel = {};

/**
 * When an user join a channel
 * @param object datas
 */
Channel.join = function (socket, datas) {
    var gameID = datas.gameID;
    var user = datas.user;
    var channels = global.models.channels;

    if (channels.exists(gameID)) {
        channels.addUser({
            socket: socket,
            infos: user
        });

        return false;
    }

    channels.add(gameID, function () {
        channels.addUser({
            socket: socket,
            infos: user
        });
    });
};


module.exports = Channel;
