const {check} = require('express-validator');
let validateRegister = [ check('name')
.notEmpty().withMessage('Debes completar el nombre')
.isLength({min:5}).withMessage('El nombre debr tener al menos 5 caracteres'),
check('email')
.notEmpty().withMessage('Debes completar email').bail()
.isEmail().withMessage('Debes utilizar un mail valido')
];
module.exports = validateRegister;