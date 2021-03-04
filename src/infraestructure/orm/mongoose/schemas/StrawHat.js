const mongoose = require('../mongoose');

const strawHatSchema = new mongoose.Schema({
    name: String,
    devilFruit: String,
    position: String,
    photo: String,
    firstAppearence: String,
    totalBounty: String
});

module.exports = mongoose.model('StrawHat', strawHatSchema);