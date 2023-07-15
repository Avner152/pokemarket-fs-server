const Item = require("../models/Items");
const mongoose = require("mongoose");

// Get all Items
const getAllItems = async (req, res) => {
  try {
    const item = await Item.find({}).sort({ createdAt: -1 });
    res.status(200).json(item);
  } catch (error) {}
};

// Get a Single Item
const getASingleItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Item Id is not Valid !!" });
  }
  const item = await Item.findById(id);

  if (!item) return res.status(404).json({ error: "Items doesn't Exist" });

  res.status(200);
};

// Create an Item
const createItem = async (req, res) => {
  const { sender, data, shipment, currency } = req.body;
  try {
    const item = await Item.create({
      sender,
      data,
      shipment,
      currency,
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an Item
const deleteSingleItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Item Id is not Valid !!" });
  }

  const item = await Item.findOneAndDelete({ _id: id });
  if (!item) return res.status(400).json({ error: "Items wasn't Deleted" });
  res.status(200).json(item);
};

// Update an Item

const updateAnItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Item Id is not Valid !!" });
  }

  const item = await Item.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!item) return res.status(400).json({ error: "Items wasn't Updated" });
  res.status(200).json(item);
};

module.exports = {
  createItem,
  getAllItems,
  getASingleItem,
  deleteSingleItem,
  updateAnItem,
};
