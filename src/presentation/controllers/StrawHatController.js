'use strict';

const GetStrawHats = require('../../aplication/use_cases/GetStrawHats');
const serviceLocator = require('../../infraestructure/config/service_locator');

module.exports = {
    
    async getStrawHats(req, res, next){
        try {
            const mugiwaras = await GetStrawHats(serviceLocator);
            res.send(200).json(mugiwaras); 
        } catch (error) {
            console.log(error);
            res.send(500).json(error);
        }
    }

}
