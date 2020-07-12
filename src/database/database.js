const
    mongoose = require('mongoose'),
    environment = process.env.ENV || 'development';

const { database: { name, host, port } } = require('../config/config')[environment];

const connect = callback => {
    mongoose.promise = global.Promise;
    mongoose.connect(`mongodb://${host}:${port}/${name}`, { useNewUrlParser: true }, callback);
    console.log(`DATABASE: mongobd://${host}:${port}/${name}`);
};

module.exports = { connect }