var Channels = {
    channels: {}
};

/**
 * Add a channel
 * @param string channel
 * @param function callback
 */
Channels.add = function (channel, callback) {
    Channels.channels[channel] = [];

    if (callback) callback();
};

/**
 * Add an user to a channel
 * @param string channel
 * @param object infos
 */
Channels.addUser = function (channel, infos) {
    Channels.channels[channel].push(infos);
};

/**
 * Check if a channel exists
 * @param string channel
 */
Channels.exists = function (channel) {
    return (!Channels.channels[channel]) ? false : true;
};

/**
 * Get the users of a channel
 * @param string channel
 */
Channels.get = function (channel) {
    if (channel === undefined) return Channels.channels;

    return Channels.channels[channel];
};

/**
 * Get the adversary of a user of a channel
 * @param string channel
 * @param string userID
 * @param function callback
 */
Channels.getAdversary = function (channel, userID, callback) {
    for (var user in Channels.channels[channel]) {
        var currentUser = Channels.channels[channel][user];

        if (currentUser.socket.id != userID) {
            callback(currentUser);
            break;
        }
    }
};

/**
 * Delete channel from socket id
 * @param socket
 */
Channels.delete = function (socket) {
    for (var channel in Channels.channels) {
        for (var user in Channels.channels[channel]) {
            var currentUser = Channels.channels[channel][user];

            if (currentUser.socket.id == socket.id) {
                delete Channels.channels[channel];

                console.log('Delete channel '+ channel);
                return;
            }
        }
    }
};


module.exports = Channels;
