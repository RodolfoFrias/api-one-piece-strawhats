const router = require('express').Router();

const strawHatController = require('../controllers/StrawHatController');

router.get('/strawhats', strawHatController.getStrawHats);
router.post('/save', strawHatController.save);

module.exports = router;