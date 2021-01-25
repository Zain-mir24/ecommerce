const express = require('express');
const router = express.Router();
const product = require('../../schema/productSchema')
const controller = require('./controller')
router.get("/", function (req, res) {
    res.send("<h1>Hello World</h1>")
});
router.post("/addproduct",async(req,res)=>{
   controller.addproduct(req, res)
})
router.post("/seachproduct",(req,res)=>{
    controller.seachproduct(req, res)
})
module.exports = router;