const { body, validationResult } = require('express-validator');
const validate=(req,res)=>{
    body('Description').isString().withMessage('must be a string')
    body('Price').isInt().withMessage('must be a number'),
    body('image').isString().withMessage('must provide image path in string '),
    body('color').isString().withMessage('Color must be a string '),
    body('Ram').isInt().withMessage('must be a number'),
    body('Rom').isInt().withMessage('must be a number')

    
}
module.exports.validate =validate