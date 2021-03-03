'use strict';

const GetStrawHats = require('../../aplication/use_cases/GetStrawHats');
const Save = require('../../aplication/use_cases/SaveStrawHat');

module.exports = {
    
    async getStrawHats(req, res, next){
        try {
            const serviceLocator = req.app.servicelocator;
            console.log(serviceLocator.strawHatRepository)
            const mugiwaras = await GetStrawHats(serviceLocator);
            res.status(200).json(mugiwaras); 
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    async save(req, res, next){
        try {
            const serviceLocator = req.app.servicelocator;
            console.log(serviceLocator.strawHatRepository)
            await Save(req.body, serviceLocator);
            res.status(200).json({message: 'OK'})
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

}
