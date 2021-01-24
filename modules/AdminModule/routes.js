const express = require('express');
const router = express.Router();
const product = require('../../schema/productSchema')
router.get("/", function (req, res) {
    res.send("<h1>Hello World</h1>")
});
router.post("/addproduct",async(req,res)=>{
    const Product = new product.insertMany()
})

module.exports = router;