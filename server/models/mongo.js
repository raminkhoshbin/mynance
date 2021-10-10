
const { MongoClient } = require("mongodb")

class Mongo {

    constructor(_url) {
        this.url = _url
    }

    async run() {

        const client = new MongoClient(this.url, {
            useNewUrlParser: true
        })

        try {
            // Connect the client to the server
            await client.connect()
            // Establish and verify connection
            await client.db("admin").command({ ping: 1 })
            console.log("Connected successfully to ", client.this.url)
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close()
        }
    }
}

module.exports = Mongo
