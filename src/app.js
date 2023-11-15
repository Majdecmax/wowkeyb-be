import express from 'express'
import { Config } from './config/index.js';

const app = express();
const port = Config.appPort;

//testing
console.log('process.env.NODE_ENV',process.env.APP_ENV);
console.log('trigger build');
console.log('another trigger build');

app.get('/', (req, res) => {
  res.status(200).send(`Welcome to ${Config.appEnv} Wowkeyb!`)
})

app.get('/health', (req,res)=>{
  res.status(200).send('server is up');
})

app.listen(port, () => {
  console.log(`Wowkeyb listening on port ${port}`)
})