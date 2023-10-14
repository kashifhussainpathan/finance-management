import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchIncome, addNewIncome } from "../../actions";

import { FilterBar } from "../../components/filterBar/FilterBar";
import { IncomeExpenseForm } from "../../components/form/IncomeExpenseForm";
import { DataTable } from "../../components/table/DataTable";

export const Income = () => {
  const [filter, setFilter] = useState({ sort: false, category: "" });

  const income = useSelector((state) => state.income);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const applyFilters = () => {
    if (filter.sort) {
      const sortedIncome = [...income]?.sort((a, b) => a.amount - b.amount);
      return sortedIncome?.filter(({ category }) =>
        category.includes(filter.category)
      );
    }
    return [...income]?.filter(({ category }) =>
      category.includes(filter.category)
    );
  };

  const filteredIncome = applyFilters();

  const formHandler = (newIncome) => {
    dispatch(addNewIncome(newIncome));
  };

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  return (
    <div className="main-container">
      <h1>Income</h1>

      <FilterBar categories={income} filter={filter} setFilter={setFilter} />

      <section className="table-and-form">
        {loading ? "loading..." : <DataTable list={filteredIncome} />}
        <IncomeExpenseForm type="Income" formHandler={formHandler} />
      </section>
    </div>
  );
};
