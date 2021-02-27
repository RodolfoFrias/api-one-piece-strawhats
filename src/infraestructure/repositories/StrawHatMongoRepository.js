'use strict';

const StrawHatRespository = require('../../domain/StrawHatRepository');
const StrawHat = require('../mongo/schemas/StrawHatModel');

module.exports = class extends StrawHatRespository {
    constructor(){
        super();
        this.strawHatModel = new StrawHat();
    }

    async getStrawHats(){
        
    }

    async save(entity){
        const { name, devilFruit, position, photo, firstAppereance, totalBounty } = entity;
        return await this.strawHatModel.save(
            name, devilFruit, position,
            photo, firstAppereance, totalBounty
        );
    }

}