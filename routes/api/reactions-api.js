const express = require("express");
const thoughtModel = require("../../models/thought");

const router = express.Router();

router.post("/:thoughtId/reactions", async (req, res) => {
  const thought = await thoughtModel.findById(req.params.thoughtId);
  thought.reactions.push(req.body);
  await thought.save();
  res.json(thought);
});

module.exports = router;
