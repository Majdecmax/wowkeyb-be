import express from 'express';
import { Config, auth } from './config/index.js';
const { authenticate } = auth;
const app = express()
const port = Config.appPort;






app.get('/', (req, res) => {
  res.send('Welcome to Wowkeyb backend!')
})

app.get('/protected', authenticate, (req, res) => {
  res.send('Welcome to the protected route');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})