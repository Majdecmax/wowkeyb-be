import AWS from 'aws-sdk';

import Config from './config.js';

AWS.config.update({
    accessKeyId: Config.accessKeyId,
    secretAccessKey: Config.secretAccessKey,
    region: Config.region,
    endpoint: Config.endpoint,
});

//instantiate dynamodb class
const dynamodb = new AWS.DynamoDB();
//listing tables
dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

const db = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true});

export default db;