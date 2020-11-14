import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default async function connectDatabase(){
    if (!client.isConnected()) await client.connect();
    const db = client.db('mytodoapp');
    return {db, client};
}