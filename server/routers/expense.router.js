const express = require("express");

const {
  getAllExpenses,
  createNewExpense,
} = require("../controllers/expense.controller.js");

const expenseRouter = express.Router();
expenseRouter.use(express.json());

expenseRouter.get("/", async (req, res) => {
  try {
    const expenses = await getAllExpenses();
    res.json({ message: "Fetched All Expenses Successfully", expenses });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch all expenses" });
  }
});

expenseRouter.post("/", async (req, res) => {
  try {
    const expense = await createNewExpense(req.body);
    res.json({ message: "Created new expense successfully", expense });
  } catch (error) {
    res.status(500).json({ error: "Failed to create new expense" });
  }
});

module.exports = expenseRouter;
