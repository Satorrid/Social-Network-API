const express = require("express");
const userModel = require("../../models/user");

const router = express.Router();

router.post("/:userId/friends/:friendId", async (req, res) => {
  const foundUser = await userModel.findById(req.params.userId);
  if (!foundUser) {
    return res.status(404).json({
      message: "User not found.",
    });
  }
  if (foundUser.friends.includes(req.params.friendId)) {
    return res.status(400).json({
      message: "You are already that persons friend!",
    });
  }

  foundUser.friends.push(req.params.friendId);
  await foundUser.save();

  res.json(foundUser);
});

router.delete("/:userId/friends/:friendId", async (req, res) => {
  const foundUser = await userModel.findById(req.params.userId);
  if (!foundUser) {
    return res.status(404).json({
      message: "User not found.",
    });
  }
  if (!foundUser.friends.includes(req.params.friendId)) {
    return res.status(400).json({
      message: "You aren't that persons friend",
    });
  }

  foundUser.friends = foundUser.friends.filter(
    (friendId) => friendId != req.params.friendId
  );
  await foundUser.save();

  res.json(foundUser);
});

module.exports = router;
