import axios from 'axios';
import { expect } from 'chai';
import app from '../src/app';

console.log('health check');

describe('Health Check', () => {
 it('check the health', async () => {
    // const response = await axios.get('http://localhost:1337/health'); 
    console.log('app',app);
    axios(app).get('http://localhost:1337/health').expect(response.status).to.be.equal(200);
 });
});