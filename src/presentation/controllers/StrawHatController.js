'use strict';

const GetStrawHats = require('../../aplication/use_cases/GetStrawHats');
const Save = require('../../aplication/use_cases/SaveStrawHat');
const SaveStrawHat = require('../../aplication/use_cases/SaveStrawHat');

module.exports = {
    
    async getStrawHats(req, res, next){
        try {
            const serviceLocator = req.app.servicelocator;
            const mugiwaras = await GetStrawHats(serviceLocator);
            res.send(200).json(mugiwaras); 
        } catch (error) {
            console.log(error);
            res.send(500).json(error);
        }
    },

    async save(req, res, next){
        try {
            const serviceLocator = req.app.servicelocator;
            await Save(req.body, serviceLocator);
            res.send(200).json({message: 'OK'})
        } catch (error) {
            console.log(error);
            res.send(500).json(error);
        }
    }

}
