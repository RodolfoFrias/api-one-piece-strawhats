'use strict';

const StrawHatRespository = require('../../domain/StrawHatRepository');
const StrawHat = require('../orm/mongoose/schemas/StrawHat');

module.exports = class extends StrawHatRespository {
    constructor(){
        super();
    }

    getStrawHats(){
        return StrawHat.find();
    }

    save(entity){
        const { name, devilFruit, position, photo, firstAppereance, totalBounty } = entity;
        const newStrawhat = new StrawHat({
            name, devilFruit, position,
            photo, firstAppereance, totalBounty
        });

        return newStrawhat.save();
    }

    update(id, entity){
        const filter = {_id: id};
        return StrawHat.updateOne(filter, entity);
    }

    delete(id){
        const filter = {_id: id};
        return StrawHat.deleteOne(filter);
    }

}