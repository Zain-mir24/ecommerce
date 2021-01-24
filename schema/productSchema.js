const mongoose = require("mongoose");

 mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

const productschema = new mongoose.Schema({
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
    type:[],
  },
  Ram: {
    type: String,
    required: true,
  },
  Rom: {
    type: String,
    require: true,
  },
});
const Mobile = mongoose.model("MobileProducts", productschema);
module.exports = Mobile;
