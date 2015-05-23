module.exports = function (socket, datas) {
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
