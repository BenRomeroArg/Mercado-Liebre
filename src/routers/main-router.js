const {Router} = require('express');
const mainController = require('../controllers/main-controller');
const router = Router();
const { body } = require('express-validator');
const validateCreateForm = [
    body('first_name').notEmpty().withMessage('debes usar un nombre valido'),
    body('last_name').notEmpty().withMessage('debe usar un apellido valido'),
    body('email').isEmail().withMessage('debes usar un E-mail valido')
];

router.get('/', mainController.home);
router.get('/registrar',mainController.registrar);
router.post('/',validateCreateForm,mainController.store)
router.get('/login', mainController.login);
router.get('/detalle', mainController.detalle);

module.exports = router;