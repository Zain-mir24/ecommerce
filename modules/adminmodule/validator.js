const { body, validationResult } = require('express-validator')
const Product = require('../../schema/productSchema')

exports.validate = (method) => {
    switch (method) {
        case 'createProduct': {

            return [
            body('Description','The value must be a String').isString(),
            body('Price','the value must be an integer').isInt(),
         
            ]
        }
        case 'searchProduct': {
            return [
                body('Pid').exists().isMongoId()

            ]
        }
        case 'deleteproduct': {
            return [
                body('Pid').exists().isMongoId()
            ]
        }
        case "addToWishlist": {
            return [
                body('productID').exists().isMongoId(),
                body('clientID').exists().isMongoId()
            ]
        }

    }
}
