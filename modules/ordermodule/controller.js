const mongoose =require('mongoose');
const order = require('../../schema/orderSchema')

const addorder = (req, res) => {
    const Order = new order({
        Orderid: req.body.Orderid,
        Orderstatus: req.body.Orderstatus,
        Orderaddress: req.body.Orderaddress,
    })

    Order.save(error => {
        if (error) {
            console.log(error)
        } else {
            console.log('order has been saved to database')
        }
    })
}

const searchorder = (req, res)=>{

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
const updateorder=(req,res)=>{
 
 try{
  product.findByIdAndUpdate(req.body.id,req.body,function(err,result){
     if (err){ 
         console.log(err) 
     } 
     else{ 
         console.log("Updated User : ", result); 
     } 
  })
 }catch(e){}

}
const deleteorder=(req,res)=>{

try{
 product.findByIdAndDelete(req.body.id,function(err,result){
     if (err){ 
         console.log(err) 
     } 
     else{ 
         console.log("order deleted"); 
     } 

 })

}catch(e){

}

}
module.exports.addorder=addorder
module.exports.deleteorder=deleteorder
module.exports.updateorder=updateorder
module.exports.searchorder=searchorder

//chal gyaa
