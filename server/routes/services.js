const express = require("express");
const router = express.Router();
const {
  fetchAllServices,
  fetchServiceById,
  addServiceById,
  deleteServiceById,
} = require("../controller/services");

router.get("/", fetchAllServices);
router.get("/:id", fetchServiceById);
router.delete("/:id", deleteServiceById);
router.post("/", addServiceById);

module.exports = router;
