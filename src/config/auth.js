import jwt from 'jsonwebtoken';
import Config from './config.js';
console.log(' auth - Config',Config);
const secretKey = Config.appSecretKey;

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send('Access Denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send('Invalid Token.');
  }
};

export default {
  authenticate
}