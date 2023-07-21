import express from 'express';
import Config from './config/config.js';

const app = express()
const port = Config.appPort;


app.get('/', (req, res) => {
  console.log('Config',Config);
  res.send('Welcome to Wowkeyb!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})