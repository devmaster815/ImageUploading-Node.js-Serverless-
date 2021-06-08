const fs = require('fs');

module.exports = {
  development: {
    username: 'root',
    password: '',
    database: 'Document',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },  
};