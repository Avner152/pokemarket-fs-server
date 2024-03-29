require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const itemRouter = require("./routes/Item");

const cors = require("cors");

app.use(express.json());
app.use(cors());

// const db = require("./models");

// Routers
app.use("/items", itemRouter);

const PORT = process.env.PORT || 5001;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port: ", PORT);
    });
  })
  .catch((err) => {
    console.log("bla");
    console.log(err);
  });

if (process.env.NODE_ENV === "production") {
  // app.use(express.static())
  app.get("*", (req, res) => {
    res.sendFile();
  });
}

// console.log("avner");
