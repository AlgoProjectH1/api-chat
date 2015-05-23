var Channels = {
    channels: {}
};

Channels.add = function (channel, callback) {
    this.channels[channel] = [];

    if (callback) callback();
};

Channels.addUser = function (channel, infos) {
    this.channels[channel].push(infos);
};

Channels.exists = function (channel) {
    return (!this.channels[channel]) ? false : true;
};

Channels.get = function (channel) {
    if (channel === undefined) return this.channels;

    return this.channels[channel];
};


module.exports = Channels;
