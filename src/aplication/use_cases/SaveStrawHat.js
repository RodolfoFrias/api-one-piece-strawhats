'use strict';

module.exports = (entity, { strawHatRepository }) => {
    return strawHatRepository.save(entity);
}