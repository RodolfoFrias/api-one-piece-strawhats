'use strict';

const GetStrawHats = require('../../aplication/use_cases/GetStrawHats');
const StrawHatRepository = require('../../infraestructure/repositories/StrawHatRepository');

module.exports = {
    
    async getStrawHats(req, res, next){
        try {
            const mugiwaras = await GetStrawHats(new StrawHatRepository());
            res.send(200).json(mugiwaras); 
        } catch (error) {
            console.log(error);
            res.send(500).json(error);
        }
    }

}
