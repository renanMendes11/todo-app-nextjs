import connect from './config/database';

export default async (req, res) => {
    const { db } = await connect();
    const collection = db.collection('users');
    switch(req.method) {

        case 'GET':
            const users = await collection.find({}).toArray();
            res.json(users);
            break;

        case 'POST':
            const { name, email, projects } = req.body;
            if (!name || !email || !projects) {
                res.status(400).json({error: "missing params"});
            }
            const user = await collection.insertOne({name, email, projects});
            res.json(user.ops[0]);
            break;

        default :
            res.status(400).json({error: "method wrong"});
            break;
    }
}