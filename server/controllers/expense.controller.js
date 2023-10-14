const Expense = require("../models/expense.model.js");

async function getAllExpenses() {
  try {
    const expenses = await Expense.find();
    return expenses;
  } catch (error) {
    console.log("Error fetching all expenses", error);
    throw error;
  }
}

async function createNewExpense(expense) {
  try {
    const newExpense = new Expense(expense);
    const savedExpense = await newExpense.save();
    return savedExpense;
  } catch (error) {
    console.log("Failed to create new Expense", error);
    throw error;
  }
}

module.exports = { getAllExpenses, createNewExpense };
