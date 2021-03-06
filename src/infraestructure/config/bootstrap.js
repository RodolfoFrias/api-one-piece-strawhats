'use strict';

require('dotenv').config();

const constants = require('./constants');
const environment = require('./environment');

module.exports = {

  async init() {
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.ORM_MONGO) {
      require('../orm/mongoose/mongoose');
    }
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
      try {
          await require('../mongo/mongo').run();
      } catch (error) {
        console.log(error)   
      }
    }
  }
};