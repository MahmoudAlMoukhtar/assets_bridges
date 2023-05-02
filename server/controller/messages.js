const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Message = require("../models/Message");

const fetchAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const fetchMessageById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const message = await Message.findById(_id);
    res.status(200).json(message);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const addMessageById = async (req, res) => {
  const {id: _id} = req.params;

  try {
    const newContactMessage = await new Message({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      message: req.body.message,
    });
    const newMessageSaved = await newContactMessage.save();
    console.log(newMessageSaved);
    res.status(201).json(newMessageSaved);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const deleteMessageById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const messageDeleted = await Message.findByIdAndDelete(_id);

    res.status(200).json(messageDeleted);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

module.exports = {
  fetchAllMessages,
  fetchMessageById,
  deleteMessageById,
  addMessageById,
};
