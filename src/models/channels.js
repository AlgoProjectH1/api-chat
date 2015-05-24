var Channels = {
    channels: {}
};

/**
 * Add a channel
 * @param string channel
 * @param function callback
 */
Channels.add = function (channel, callback) {
    this.channels[channel] = [];

    if (callback) callback();
};

/**
 * Add an user to a channel
 * @param string channel
 * @param object infos
 */
Channels.addUser = function (channel, infos) {
    this.channels[channel].push(infos);
};

/**
 * Check if a channel exists
 * @param string channel
 */
Channels.exists = function (channel) {
    return (!this.channels[channel]) ? false : true;
};

/**
 * Get the users of a channel
 * @param string channel
 */
Channels.get = function (channel) {
    if (channel === undefined) return this.channels;

    return this.channels[channel];
};


module.exports = Channels;
