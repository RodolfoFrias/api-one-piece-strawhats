'use strict';

const mongodb = require('mongodb');
const { getDB } = require('../mongo');
const ObjectId = mongodb.ObjectId;

module.exports = class StrawHat {
    constructor(
        name,
        devilFruit,
        position,
        photo,
        firstAppearence,
        totalBounty
    ){
        this.name,
        this.devilFruit,
        this.position,
        this.photo,
        this.firstAppearence,
        this.totalBounty
    }

    async save(){
        const collection = getDB.collection('one_piece_api');
        return collection.insertOne(this);
    }

}