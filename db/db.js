const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = `mongodb+srv://nate_orona98:${process.env.MONGO_PASSWORD}@grouptwofinalproject.cdtbhki.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

const run = async () => {
    try {
        await client.connect()
        const ping = await client.db('admin').command({ ping: 1 })
        console.log('CONNECTED TO DB: ', ping)
    } catch(err) {
        console.error(`ERROR CONNECTING TO DB: ${err}`)
    } finally {
        console.log('CLOSING DB CONNECTION')
        await client.close()
    }
}

module.exports = { run, client }
// Cass: dr4F5Aic963rqtRQ - cassandra
// Poulis: ZN7lnY25fdFbAV1K - poulis