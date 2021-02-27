'use strict';

const constants = require('./constants');
const environment = require('./environment');

function buildBeans() {
    const beans = {};
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
        const StrawHatMongoRepository = require('../repositories/StrawHatMongoRepository');
        beans.StrawHatMongoRepository = new StrawHatMongoRepository();
    } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.ORM_MONGO) {
        const StrawHatMongooseRepositoy = require('../repositories/StrawHatMongooseRepositoy');
        beans.StrawHatMongooseRepositoy = new StrawHatMongooseRepositoy();
    }

  return beans;
}

module.exports = buildBeans();