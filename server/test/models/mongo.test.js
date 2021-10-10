const Mongo = require('../../models/mongo')
const config = require('../../config/database')

// Connection URL

let mongo = new Mongo(config.mongo.mynance)

mongo.run().catch(console.dir)