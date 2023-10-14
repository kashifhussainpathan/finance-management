import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchExpenses, addNewExpense } from "../../actions";

import { DataTable } from "../../components/table/DataTable";
import { FilterBar } from "../../components/filterBar/FilterBar";
import { IncomeExpenseForm } from "../../components/form/IncomeExpenseForm";

export const Expense = () => {
  const [filter, setFilter] = useState({ sort: false, category: "" });

  const expenses = useSelector((state) => state.expenses);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const applyFilters = () => {
    if (filter.sort) {
      const sortedExpense = [...expenses]?.sort((a, b) => a.amount - b.amount);
      return sortedExpense?.filter(({ category }) =>
        category.includes(filter.category)
      );
    }
    return [...expenses]?.filter(({ category }) =>
      category.includes(filter.category)
    );
  };

  const filteredExpense = applyFilters();

  const formHandler = (newExpense) => {
    dispatch(addNewExpense(newExpense));
  };

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  return (
    <div className="main-container">
      <h1>Expenses</h1>

      <FilterBar categories={expenses} filter={filter} setFilter={setFilter} />

      <section className="table-and-form">
        {loading ? "loading..." : <DataTable list={filteredExpense} />}
        <IncomeExpenseForm type="Expense" formHandler={formHandler} />
      </section>
    </div>
  );
};
