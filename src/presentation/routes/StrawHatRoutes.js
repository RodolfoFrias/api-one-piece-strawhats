const router = require('express').Router();

const strawHatController = require('../controllers/StrawHatController');

router.get('/strawhats', strawHatController.getStrawHats);
router.post('/save', strawHatController.save);
router.put('/update/:id', strawHatController.update);
router.delete('/delete/:id', strawHatController.delete);

module.exports = router;