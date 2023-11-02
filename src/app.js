import express from 'express';
import { Config, auth, DynamoDBTable } from './config/index.js';

import { v4 as uuidv4 } from 'uuid';


const { authenticate } = auth;
const app = express()
const port = Config.appPort;


// Body parsing middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

const tableName = 'Users';
const table = new DynamoDBTable(tableName);

const newRecord = {
    UserID: uuidv4(),
    name: 'Logan Two',
    age: 32
}
console.log('table',table);
await table.create(newRecord);


app.get('/', (req, res) => {
  res.send('Welcome to Wowkeyb backend!')
})

app.get('/protected', authenticate, (req, res) => {
  res.send('Welcome to the protected route');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})