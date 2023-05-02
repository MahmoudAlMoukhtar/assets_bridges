const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String},
    message: {type: String},
  },
  {timestamps: true}
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
