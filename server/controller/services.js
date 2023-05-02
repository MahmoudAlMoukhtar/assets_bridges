const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Service = require("../models/Service");

const fetchAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const fetchServiceById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const service = await Service.findById(_id);
    res.status(200).json(service);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const addServiceById = async (req, res) => {
  const {id: _id} = req.params;
  const {
    fullName,
    email,
    address,
    phone,
    adjective,
    landLocation,
    theAim,
    landSpace,
    approximateLandPrice,
    additionalInformation,
  } = req.body;
  try {
    const newServiceRequest = await new Service({
      fullName,
      email,
      address,
      phone,
      adjective,
      landLocation,
      theAim,
      landSpace,
      approximateLandPrice,
      additionalInformation,
    });
    const serviceRequestSaved = await newServiceRequest.save();
    console.log(serviceRequestSaved);
    res.status(201).json(serviceRequestSaved);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const deleteServiceById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const serviceRequestDeleted = await Service.findByIdAndDelete(_id);

    res.status(200).json(serviceRequestDeleted);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

module.exports = {
  fetchAllServices,
  fetchServiceById,
  addServiceById,
  deleteServiceById,
};
