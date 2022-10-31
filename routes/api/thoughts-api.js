const express = require("express");
const thoughtModel = require("../../models/thought");

const router = express.Router();

router.post("/", async (req, res) => {
  const newThought = await thoughtModel.create(req.body);
  res.json(newThought);
});

router.get("/", async (req, res) => {
  const allThoughts = await thoughtModel.find({});
  res.json(allThoughts);
});

router.get("/:id", async (req, res) => {
  const singleThought = await thoughtModel.findById(req.params.id);
  res.json(singleThought);
});

router.put("/:id", async (req, res) => {
  const originalThought = await thoughtModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.json(originalThought);
});

router.delete("/:id", async (req, res) => {
  const results = await userModel.findByIdandDelete(req.params.id);
  res.json(results);
});

module.exports = router;
