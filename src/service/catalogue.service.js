const { MongoServerError } = require('mongodb');
const { client } = require('../model/bookDB.js');


 initDb = async (client) => {
     try{
        await client.connect();
     }catch(error){
         if(error instanceof MongoServerError){
             console.log(`Server returned: ${error}`);
         }

         throw error;
     }
    
}

initDb(client);

const db = client.db('bookstore');
const collection = db.collection('catalogue');


module.exports = class CRUD {
    
    static getCatalogue = async () => {
        const result = await collection.find({}).toArray();
        if(!result){
            console.log('Something went wrong');
        }

        return result;
    }

    static createCatalogue = async (data) => {
        // const {title, author, year} = data;

        const newCatalogue = await collection.insertOne(data);

        if(!newCatalogue){
            throw new Error('Something went Wrong: Data not inserted');
        }

        return newCatalogue;

    }
}