var assert = require('assert');
var channels = require('../src/models/channels.js');

describe('Channels', function() {
    describe('#add()', function() {
        it('should add a channel', function() {
            channels.add('1234abcd');
            assert.equal(true, channels.exists('1234abcd'));
        })
    })

    describe('#addUser()', function() {
        it('should add a user to a channel', function() {
            channels.add('1234abcd');
            channels.addUser('1234abcd', {socket: null, infos: {username: 'Romain'}});
            assert.equal(JSON.stringify([{socket: null, infos: {username: 'Romain'}}]), JSON.stringify(channels.get('1234abcd')));
        })
    })
})
