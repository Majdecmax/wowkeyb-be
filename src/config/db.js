import AWS from 'aws-sdk';

import Config from './config.js';

AWS.config.update({
    accessKeyId: Config.accessKeyId,
    secretAccessKey: Config.secretAccessKey,
    region: Config.region,
    endpoint: Config.endpoint,
});

const db = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true});

export default db;