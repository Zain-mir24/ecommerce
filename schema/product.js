const mongoose = require("mongoose");

import mongoose from "mongoose";

await mongoose.connect("mongodb://localhost:27017/Ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const product = new mongoose.Schema({
  Description: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  color: {
    properties: [],
  },
  Ram: {
   type:String,
   required:true
  },
  Rom:{
   type:String,
   require:true
  },
});
const Mobile = db.model('MobileProducts', product);
