const mongoose = require("mongoose");

 mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    
  });
  mongoose.connection.on('connected', function() {
    console.log('database is connected successfully');
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
    type:String,
  },
  Ram: {
    type: Number,
    required: true,
  },
  Rom: {
    type: Number,
    require: true,
  },
});
const Mobile = mongoose.model("MobileProducts", productschema);
module.exports = Mobile;
