'use strict';

const GetStrawHats = require('../../aplication/use_cases/GetStrawHats');
const Save = require('../../aplication/use_cases/SaveStrawHat');
const Update = require('../../aplication/use_cases/UpdateStrawHat');
const Delete = require('../../aplication/use_cases/DeleteStrawHat');

module.exports = {
    
    async getStrawHats(req, res, next){
        try {
            const serviceLocator = req.app.servicelocator;
            console.log(serviceLocator.strawHatRepository)
            const mugiwaras = await GetStrawHats(serviceLocator);
            res.status(200).json(mugiwaras); 
        } catch (error) {
            console.log(error);
            if(!error.statusCode){
                error.statusCode = 500;
            }
            res.status(error.statusCode).json(error);
        }
    },

    async save(req, res, next){
        try {
            const serviceLocator = req.app.servicelocator;
            await Save(req.body, serviceLocator);
            res.status(200).json({message: 'OK'})
        } catch (error) {
            console.log(error);
            if(!error.statusCode){
                error.statusCode = 500;
            }
            res.status(error.statusCode).json(error);
        }
    },

    async update(req, res, next){
        try {
            const { id } = req.params;
            const serviceLocator = req.app.servicelocator;
            await Update(id, req.body, serviceLocator);
            res.status(200).json({message: `Updated ${userUpdated.name}`});
        } catch (error) {
            console.log('Error while updating: ', error);
            if(!error.statusCode){
                error.statusCode = 500;
            }
            res.status(error.statusCode).json(error);
        }
    },

    async delete(req, res, next){
        try {
            const { id } = req.params;
            const serviceLocator = req.app.servicelocator;
            await Delete(id, serviceLocator);
            res.status(200).json({message: `Deleted!`});
        } catch (error) {
            console.log('Error while updating: ', error);
            if(!error.statusCode){
                error.statusCode = 500;
            }
            res.status(error.statusCode).json(error);
        }
    }

}
