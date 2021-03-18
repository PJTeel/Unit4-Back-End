const express = require("express");
const router = express.Router();

const PaintingModel = require('../models').Paintings;


// GET ALL Paintings
router.get("/", async (req, res) => {
    let allPaintings = await PaintingModel.findAll();
    res.json({ allPaintings});
  });


module.exports = router;
