const mongoose = require('mongoose');
const product =require('../../schema/productSchema')

const addproduct= (req,res)=>{
    const Product =  new product(
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
        console.log("your data has been saved")
        }
    })
}
const seachproduct = (req, res)=>{
    const Product = new product({
        Description:req.body.Description,
    })
    Product.find((error)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log("Found the product through the description")
        }
    })

}
module.exports.addproduct =addproduct
module.exports.seachproduct = seachproduct