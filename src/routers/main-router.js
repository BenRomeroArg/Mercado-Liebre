const {Router} = require('express');
const mainController = require('../controllers/main-controller');
const router = Router();

router.get('/', mainController.home);
router.get('/registrar', mainController.registrar);
router.get('/login', mainController.login);
router.get('/detalle', mainController.detalle);

module.exports = router;