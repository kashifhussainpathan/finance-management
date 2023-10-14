const Income = require("../models/income.model.js");

async function getAllIncomes() {
  try {
    const incomes = await Income.find();
    return incomes;
  } catch (error) {
    console.log("Error fetching all incomes", error);
    throw error;
  }
}

async function createNewIncome(income) {
  try {
    const newIncome = new Income(income);
    const savedIncome = await newIncome.save();
    return savedIncome;
  } catch (error) {
    console.log("Failed to create new Income", error);
    throw error;
  }
}

module.exports = { getAllIncomes, createNewIncome };
