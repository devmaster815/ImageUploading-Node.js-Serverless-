import { Application } from 'express';
const cors = require('cors');// Current `cors` version 2.8.5 is exported as `module.exports=` not as `export default`

export default (application: Application): void => {
  application.use(cors());
};
