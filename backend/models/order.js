const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const Orders = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  count: Number,
});

module.exports = mongoose.model("Orders", Orders);
