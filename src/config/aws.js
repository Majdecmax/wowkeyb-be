import AWS from "aws-sdk";
import Config from './config.js';

AWS.config.update({
  accessKeyId: Config.accessKey,
  secretAccessKey: Config.secretAccessKey,
  region: Config.region
});

export default AWS;
