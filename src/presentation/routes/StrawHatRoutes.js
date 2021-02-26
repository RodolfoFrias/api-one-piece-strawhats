const router = require('express').Router();

const strawHatController = require('../controllers/StrawHatController');

router.get('/strawhats', strawHatController.getStrawHats);

module.exports = router;