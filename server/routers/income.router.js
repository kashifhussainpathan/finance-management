const express = require("express");

const {
  getAllIncomes,
  createNewIncome,
} = require("../controllers/income.controller.js");

const incomeRouter = express.Router();
incomeRouter.use(express.json());

incomeRouter.get("/", async (req, res) => {
  try {
    const incomes = await getAllIncomes();
    res.json({ message: "Fetched All Incomes Successfully", incomes });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch all incomes" });
  }
});

incomeRouter.post("/", async (req, res) => {
  try {
    const income = await createNewIncome(req.body);
    res.json({ message: "Created new income successfully", income });
    return income;
  } catch (error) {
    res.status(500).json({ error: "Failed to create new income" });
  }
});

module.exports = incomeRouter;
