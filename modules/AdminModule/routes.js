const express = require('express');
const router = express.Router();
const product = require('../../schema/productSchema')
router.get("/", function (req, res) {
    res.send("<h1>Hello World</h1>")
});
router.post("/addproduct",async(req,res)=>{
    const Product = await new product.insertMany(
        {
            Description:req.body.Description,
            Price:req.body.Price,
            image:req.body.image,
            color:req.body.color,
             Ram:req.body.Ram,
             Rom:req.body.Rom

        }
    )
    Product.save((error)=>{
        if(error){
            console.log(error)
        }
        else{
        console.log("your data has been save")
        }
    })
})

module.exports = router;