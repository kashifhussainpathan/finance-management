const Savings = require("../models/savings.model.js");

async function getAllSavings() {
  try {
    const savings = await Savings.find();
    return savings;
  } catch (error) {
    console.log("Error fetching all savings", error);
    throw error;
  }
}

async function createNewSavings(savings) {
  try {
    const newSavings = new Savings(savings);
    const savedSavings = await newSavings.save();
    return savedSavings;
  } catch (error) {
    console.log("Failed to create new Savings", error);
    throw error;
  }
}

module.exports = { getAllSavings, createNewSavings };
