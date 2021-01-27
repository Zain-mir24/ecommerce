import express from 'express';
const router = express.router
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
 router.post("/deleteorder",async(req,res)=>{
     controller.deleteorder(req, res)
 })