const express = require("express");
const router = express.Router();
const { Products } = require("../models");

router.get("/", async (req, res) => {
  const productList = await Products.findAll();

  res.json(productList);
});
router.post("/", async (req, res) => {
  try {
    const post = req.body;
    await Products.create(post);
    res.json(post);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const productId = req.body.id;
    console.log("Delete req.body >>", req.body);

    await Products.destroy({ where: { id: productId } }).catch((err) =>
      console.log(err)
    );
  } catch (error) {
    console.log(error);
  }

  // try {
  //   const product = await Products.findOne({
  //     where: { product: req.params.product },
  //   }).catch((e) => console.log(e));
  //   if (!product) console.log("err");
  //   product.destroy();
  // } catch (error) {
  //   console.log(error);
  // }
});

module.exports = router;
//
