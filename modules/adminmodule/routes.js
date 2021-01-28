const express = require('express');
const router = express.Router();
const product = require('../../schema/productSchema')
const controller = require('./controller')
const {validationResult,body} =require('express-validator')
const validator = require('./validator')
router.get("/", function (req, res) {
    res.send("<h1>Hello World</h1>")
});
router.post("/addproduct",validator.validate("createProduct"),async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(422).json({ errors: errors.array() });
        }

        controller.addproduct(req, res,next)
        // Return a response to client.
    } catch (err) {
        
        
    }
   
})
router.post("/searchproduct",(req,res)=>{
    controller.seachproduct(req, res)
})
router.post("/updateproduct",(req,res)=>{
    controller.updateproduct(req, res)
})
router.post("/deleteproduct",(req,res)=>{
    controller.deleteproduct(req, res)
})
module.exports = router;