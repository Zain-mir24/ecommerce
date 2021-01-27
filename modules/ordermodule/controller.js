const mongoose =require('mongoose');
const order = require('../../schema/orderSchema')

const addorder = (req, res) => {
    const Order = new order({
        orderid: req.body.Orderid,
        name: req.body.Name,
        address: req.body.Address,
        postalcode: req.body.PostalCode
    })

    Order.save(error => {
        if (error) {
            console.log(error)
        } else {
            console.log('order has been saved to database')
        }
    })
}
//searching the order
const searchorder = (req, res)=>{

    try{
     order.findById(req.body.id,{}, function(err, result){
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
  order.findByIdAndUpdate(req.body.id,req.body,function(err,result){
     if (err){ 
         console.log(err) 
     } 
     else{ 
         console.log("The record has been deleted"); 
     } 
  })
 }catch(e){}

}
const deleteorder=(req,res)=>{
try{
 order.findByIdAndDelete(req.body.Orderid,function(err,result){
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
