const { Schema, model } = require("mongoose");
const CartSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = model("Cart", CartSchema);
