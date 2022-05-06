const { MongoClient } = require('mongodb');

require('dotenv').config();


const uri = `${process.env.DB_HOST}:${process.env.DBPORT}`

const client = new MongoClient(uri);

module.exports = client;

// exports.dbConnection = async () => {

//     try{
//         await client.connect();
//         console.log("Connected successfully to DB");
//     }catch(err){
//         console.log(err);
//     }
// }