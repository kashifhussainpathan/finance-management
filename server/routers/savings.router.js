const express = require("express");

const {
  getAllSavings,
  createNewSavings,
} = require("../controllers/savings.controller.js");

const savingsRouter = express.Router();
savingsRouter.use(express.json());

savingsRouter.get("/", async (req, res) => {
  try {
    const savings = await getAllSavings();
    res.json({ message: "Fetched All Savings Successfully", savings });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch all savings" });
  }
});

savingsRouter.post("/", async (req, res) => {
  try {
    const savings = await createNewSavings(req.body);
    res.json({ message: "Created new savings successfully", savings });
  } catch (error) {
    res.status(500).json({ error: "Failed to create new savings" });
  }
});

module.exports = savingsRouter;
