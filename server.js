const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect("mongodb://localhost:27017");
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
