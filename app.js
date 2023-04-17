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

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => console.log(err));

// console.log("avner");
