'use strict';

const constants = require('./constants');
const environment = require('./environment');

function buildBeans() {
    const beans = {};
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
        const StrawHatMongoRepository = require('../repositories/StrawHatMongoRepository');
        beans.strawHatRepository = new StrawHatMongoRepository();
    } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.ORM_MONGO) {
        const StrawHatMongooseRepository = require('../repositories/StrawHatMongooseRepository');
        beans.strawHatRepository = new StrawHatMongooseRepository();
    }

    console.log('Serviceee', beans)
  return beans;
}

module.exports = buildBeans();