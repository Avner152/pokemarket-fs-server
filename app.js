const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const postProduct = require("./routes/Product");
app.use("/products", postProduct);

const PORT = process.env.PORT || 5001;

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port: ", PORT);
    });
  })
  .catch((err) => console.log(err));

// console.log("avner");
