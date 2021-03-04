'use strict';

module.exports = (id, entity, {strawHatRepository}) => {
    return strawHatRepository.update(id, entity);
}