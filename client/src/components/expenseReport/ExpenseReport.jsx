import React from "react";

export const ExpenseReport = ({ expenses, totalExpense }) => {
  return (
    <>
      <h2>Expense Breakdown Report</h2>
      <table>
        <thead className="heading-row">
          <th>Category</th>
          <th>Amount</th>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={item?._id}>
              <td>{item?.category}</td>
              <td>{item?.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{totalExpense}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
