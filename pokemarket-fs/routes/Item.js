const express = require("express");
const Item = require("../models/Items");
const {
  createItem,
  getAllItems,
  getASingleItem,
  deleteSingleItem,
  updateAnItem,
} = require("../controllers/itemController");
const router = express.Router();

router.get("/", getAllItems);

router.get("/:id", getASingleItem);

router.post("/", createItem);

router.delete("/:id", deleteSingleItem);

router.patch("/:id", updateAnItem);

module.exports = router;
