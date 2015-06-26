var Channel = {};

/**
 * When an user join a channel
 * @param object datas
 */
Channel.join = function (socket, datas) {
    datas = JSON.parse(datas);

    var gameID = datas.gameID;
    var user = datas.user;
    var channels = global.models.channels;

    console.log(user.username +' join channel '+ gameID);

    if (channels.exists(gameID)) {
        channels.addUser(gameID, {
            socket: socket,
            infos: user
        });

        return false;
    }

    channels.add(gameID, function () {
        channels.addUser(gameID, {
            socket: socket,
            infos: user
        });
    });

    console.log('Create channel '+ gameID);
};


module.exports = Channel;
