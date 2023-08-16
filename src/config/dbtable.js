import { db } from './index.js'

class DynamoDBTable {

    constructor(tableName) {
        this.tableName = tableName;
    }

    async create(record) {
        console.log('creating new record',record);
        const params= {
            TableName: this.tableName,
            Item: record
        }
        await db.put(params).promise();
    }

    async read(key) {
        const params = {
            TableName: this.tableName,
            Key: key
        }
        const result = await db.get(params).promise();
        return result.Item;
    }

    async update(key, updateExpression, expressionAttributeValues) {
        const params = {
            TableName: this.tableName,
            Key: key,
            UpdateExpression: updateExpression,
            ExpressionAttributeValues: expressionAttributeValues
        };
        await db.update(params).promise();
    }

    async delete(key) {
        const params = {
            TableName: this.tableName,
            Key: key
        };
        await db.delete(params).promise();
    }
}

export default DynamoDBTable;