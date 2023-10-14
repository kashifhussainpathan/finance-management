import React from "react";

export const IncomeExpenseReport = ({
  totalIncome,
  totalExpense,
  totalSavings,
}) => {
  return (
    <>
      <h2>Income vs Expense Report</h2>
      <div>
        <section>
          <b>Total Income: </b>
          <span>{totalIncome}</span>
        </section>
        <section>
          <b>Total Expense: </b>
          <span>{totalExpense}</span>
        </section>
        <section>
          <b>Total Savings: </b>
          <span>{totalSavings}</span>
        </section>
      </div>
    </>
  );
};
