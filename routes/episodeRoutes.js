const express = require("express");
const router = express.Router();
const Episode = require("../models/Episode");

// GET all episodes
router.get("/", async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.json(episodes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch episodes" });
  }
});

// CREATE new episode
router.post("/", async (req, res) => {
  try {
    const newEp = new Episode(req.body);
    await newEp.save();
    res.json(newEp);
  } catch (err) {
    res.status(500).json({ error: "Failed to create episode" });
  }
});

module.exports = router;
