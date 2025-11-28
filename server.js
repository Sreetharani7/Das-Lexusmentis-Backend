const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Episode = require("./models/Episode");
const Poem = require("./models/Poem");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.get("/api/episodes", async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.json(episodes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch episodes" });
  }
});

app.get("/api/poems", async (req, res) => {
  try {
    const poems = await Poem.find();
    res.json(poems);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch poems" });
  }
});

// Root
app.get("/", (req, res) => {
  res.send("Backend running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
