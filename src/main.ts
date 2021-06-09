if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

import express, { Application } from 'express';
import { APP_PORT } from './config/constants';
import setup from './config';

const fileupload = require("express-fileupload");
const cors = require("cors");

const application: Application = express();
const serverless = require('serverless-http');

application.use(cors());
application.use(fileupload());
application.use(express.static("files"));

setup(application);

application.listen(APP_PORT, (): void => {
  console.log('server listening on port', APP_PORT);
});

// module.exports.handler = serverless(application);