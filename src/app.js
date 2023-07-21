import express from 'express';
import Config from './config/config.js';

const app = express()

console.log('process.env.APP_URL',process.env.APP_URL)

app.get('/', (req, res) => {
  res.send('Welcome to Wowkeyb!')
})

app.listen(Config.appPort, () => {
  console.log(`Example app listening on port ${Config.appPort}`)
})