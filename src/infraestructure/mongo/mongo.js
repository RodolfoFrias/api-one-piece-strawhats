const { MongoClient } = require("mongodb");
const environment = require('../config/environment');

const client = new MongoClient(environment.database.url, { useUnifiedTopology: true });
let connection;

async function run() {
    try {
        await client.connect();
        connection = await client.db();
        console.log('Connected to MongoDB')
    } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
    }
  }
//   run().catch(console.dir);

  const getDB = () => {
      if(connection){
          return connection;
      }
      else{
          throw 'Error db not found!';
      }
  }

  module.exports = {
    run,
    getDB
  }