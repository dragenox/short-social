const config = require('./config');
const mongoose = require('mongoose');
// DeprecationWarning: 
// Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7.
mongoose.set('strictQuery', false);

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(config.mongo_url)
        .then(() => {
            console.log('database connection successfull!');
        })
        .catch((err) => {
            console.log('database connection error: ' + err);
        });
    }
}

module.exports = new Database();