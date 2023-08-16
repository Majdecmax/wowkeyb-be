import { DynamoDBTable } from "../config";

const tableName = 'users';
const table = new DynamoDBTable(tableName);

const newRecord = {
    name: 'Logan Two',
    age: 32
}

await table.create(newRecord);