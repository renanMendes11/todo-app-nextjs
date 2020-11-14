import {ObjectId} from 'mongodb';
import connect from '../config/database';

export default async (req, res) => {
    const { db } = await connect();
    const collection = db.collection('users');
    switch(req.method) {
        case 'GET':
            if (!req.query) {
                res.status(400).json({error: "missing params"});
                break;
            }
            const userFind = await collection.findOne({_id: new ObjectId(req.query.id)});
            if (!userFind) {
                res.status(400).json({error: "user not found"});
                break;
            }
            res.json(userFind);
            break;
        case 'PUT':
            if (!req.query) {
                res.status(400).json({error: "missing params"});
                break;
            }
            const {name, email, projects} = req.body;
            if (!name || !email || !projects) {
                res.status(400).json({error: "missing params"});
            } 
            const userUpdated = await collection.updateOne({_id: new ObjectId(req.query.id)}, {$set : {name, email} });
            // console.log(userUpdated);    
            if (!userUpdated) {
                res.status(400).json({error: "user not found"});
                break;
            }
            res.status(200).json({message: "user updated successfully"});
            break;
        default :
            res.status(400).json({error: "method wrong"});
            break;
    }
}