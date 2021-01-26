import express from 'express';
const router = express.router
const order = require('../../schema/orderSchema')
const controller= require('./controller')
router.post("/addorder",async(req,res)=>{
    controller.addorder(req, res)
 })