import express from 'express'
import { Config } from './config/index.js';

const app = express();
const port = Config.appPort;

//testing
console.log('process.env.NODE_ENV',process.env.NODE_ENV);
console.log('trigger build');

app.get('/', (req, res) => {
  res.send('Welcome to Wowkeyb!')
})

app.listen(port, () => {
  console.log(`Wowkeyb listening on port ${port}`)
})