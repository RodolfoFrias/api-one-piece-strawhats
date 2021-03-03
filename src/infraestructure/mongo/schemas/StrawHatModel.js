'use strict';

const mongodb = require('mongodb');
const { getDB } = require('../mongo');
const ObjectId = mongodb.ObjectId;
const collection = getDB().collection('Strawhat');

module.exports = class StrawHat {
    constructor(
        name,
        devilFruit,
        position,
        photo,
        firstAppearence,
        totalBounty
    ){
        this.name = name;
        this.devilFruit = devilFruit;
        this.position = position;
        this.photo = photo;
        this.firstAppearence = firstAppearence;
        this.totalBounty = totalBounty;
    }

    save(){
        return collection.insertOne(this);
    }

    static find(){
        return collection.find();
    }

    static update(){

    }

    static delete(){

    }

}