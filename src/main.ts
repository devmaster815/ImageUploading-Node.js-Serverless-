if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

import express, { Application } from 'express';
import { APP_PORT } from './config/constants';
import setup from './config';

const application: Application = express();

setup(application);

application.listen(APP_PORT, (): void => {
  console.log('server listening on port', APP_PORT);
});
