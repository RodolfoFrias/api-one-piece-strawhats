const { MongoClient } = require("mongodb");
const environment = require('../config/environment');

const client = new MongoClient(environment.database.url, { useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('Connected to MongoDB')
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);