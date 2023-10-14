import "./form.css";
import React, { useState } from "react";

export const IncomeExpenseForm = ({ type, formHandler }) => {
  const [input, setInput] = useState({
    amount: "",
    description: "",
    category: "",
  });

  const changeHandler = (inputField, text) => {
    setInput((prev) => ({ ...prev, [inputField]: text }));
  };

  const clickHandler = () => {
    formHandler({
      description: input.description,
      amount: Number(input.amount),
      category: input.category,
    });
    setInput({ amount: "", description: "", category: "" });
  };

  const isDisable = () =>
    input.amount < 1 || input.description === "" || input.category === "";

  return (
    <div className="form">
      <div className="flex form-inputs">
        <input
          type="Number"
          placeholder="Amount"
          value={input.amount}
          onChange={(e) => changeHandler("amount", e.target.value)}
        />
        <input
          placeholder="Category"
          value={input.category}
          onChange={(e) => changeHandler("category", e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={input.description}
          onChange={(e) => changeHandler("description", e.target.value)}
        />
        <button disabled={isDisable()} onClick={() => clickHandler()}>
          Add New {type}
        </button>
      </div>
    </div>
  );
};
