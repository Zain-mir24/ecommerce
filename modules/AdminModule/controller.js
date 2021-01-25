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

       try{
        product.findById(req.body.id,{}, function(err, result){
            if(err){
                console.log(err);
            }
            else{
                res.send(result)
            }
        })
           
       }
       catch(e){

       } 
    }

module.exports.addproduct =addproduct
module.exports.seachproduct = seachproduct