const express = require('express')
const router = express.Router()
const order = require('../../schema/orderSchema')
const controller= require('./controller')
router.post("/addorder",async(req,res)=>{
    controller.addorder(req, res)
 })
 router.post("/searchorder",async(req,res)=>{
     controller.searchorder(req, res)
 })
 router.post("/updateorder",async(req,res)=>{
     controller.updateorder(req, res)
 })
 router.get("/deleteorder",async(req,res)=>{
     controller.deleteorder(req, res)
 })
 module.exports= router
 //this is the router file for the ecommerce website