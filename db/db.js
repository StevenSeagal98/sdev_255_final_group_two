// module.exports = { run, client }
// // env: MONGODB_URI=mongodb+srv://sdev255:group2@sdev255.cr2wps4.mongodb.net/
// // Cass: dr4F5Aic963rqtRQ - cassandra
// // Poulis: b0f7aa8e1e94f0f721be245be8d2dd84b10c0b1c35280c8fb79d8f28bb50823a - poulis


const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI

const connection = mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(`Error connecting to MongoDB: ${err}`))

module.exports = connection