const express = require("express");
const {
  fetchAllMessages,
  fetchMessageById,
  deleteMessageById,
  addMessageById,
} = require("../controller/messages");
const router = express.Router();

router.get("/", fetchAllMessages);
router.get("/:id", fetchMessageById);
router.delete("/:id", deleteMessageById);
router.post("/", addMessageById);

module.exports = router;
