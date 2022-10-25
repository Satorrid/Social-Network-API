const router = require("express").Router();
const userRoutes = require("./user-api");

router.use("/user", userRoutes);

router.use((req, res) => res.send("Wrong Route!"));

module.exports = router;
