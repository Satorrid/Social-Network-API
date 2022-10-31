const express = require("express");
const userModel = require("../../models/user");
const friendRoutes = require("./friends-api");

const router = express.Router();

router.use("/", friendRoutes);

router.post("/", async (req, res) => {
  const newUser = await userModel.create(req.body);
  res.json(newUser);
});

router.get("/", async (req, res) => {
  const allUsers = await userModel.find({});
  res.json(allUsers);
});

router.get("/:id", async (req, res) => {
  const foundUser = await userModel
    .findById(req.params.id)
    .populate("friends thoughts");
  res.json(foundUser);
});

router.put("/:id", async (req, res) => {
  const originalUser = await userModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.json(originalUser);
});

router.delete("/:id", async (req, res) => {
  const results = await userModel.findByIdAndDelete(req.params.id);
  res.json(results);
});

module.exports = router;
