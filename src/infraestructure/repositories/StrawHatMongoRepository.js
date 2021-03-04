'use strict';

const StrawHatRespository = require('../../domain/StrawHatRepository');
const StrawHat = require('../mongo/schemas/StrawHatModel');

module.exports = class extends StrawHatRespository {
    constructor(){
        super();
    }

    getStrawHats(){
        return StrawHat.find().toArray();
    }

    save(entity){
        const { name, devilFruit, position, photo, firstAppereance, totalBounty } = entity;
        const newStrawhat = new StrawHat(
            name, devilFruit, position,
            photo, firstAppereance, totalBounty
        );

        return newStrawhat.save();
    }

    update(id, entity){
        return StrawHat.update(id, entity);
    }

    delete(id){
        return StrawHat.delete(id);
    }

}