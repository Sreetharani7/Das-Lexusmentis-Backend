const express = require("express");
const router = express.Router();
const Poem = require("../models/Poem");

// GET all poems
router.get("/", async (req, res) => {
  try {
    const poems = await Poem.find();
    res.json(poems);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch poems" });
  }
});

// CREATE new poem
router.post("/", async (req, res) => {
  try {
    const newPoem = new Poem(req.body);
    await newPoem.save();
    res.json(newPoem);
  } catch (err) {
    res.status(500).json({ error: "Failed to create poem" });
  }
});

module.exports = router;
