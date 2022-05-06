const { MongoClient } = require('mongodb');

require('dotenv').config();


const uri = `${process.env.DB_HOST}:${process.env.DBPORT}`

const client = new MongoClient(uri);

module.exports = class connect {
    static connect = async () => {
        await client.connect();

        console.log("Connected successfully to DB");
    }
}