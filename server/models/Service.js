const mongoose = require("mongoose");

const ServiceSchema = mongoose.Schema(
  {
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String},
    phone: {type: Number},
    adjective: {type: String},
    landLocation: {type: String},
    theAim: {type: String},
    landSpace: {type: String},
    approximateLandPrice: {type: Number},
    additionalInformation: {type: String},
  },
  {timestamps: true}
);

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;
