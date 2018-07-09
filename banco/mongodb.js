const mongoose = require('mongoose');

mongoose.Promise = Promise

const defaultUri = 'mongodb://localhost/codesign'
const connection = mongoose.createConnection(process.env.MONGO_URI||defaultUri)

const Serie = connection.model('Serie', mongoose.Schema({
    titulo: String,
    cartaz: String,
    trailer: String,
    dataEstreia: Date,
    elenco: Array
}))

module.exports.Serie = Serie