import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSavings, addNewSavings } from "../../actions";

import { FilterBar } from "../../components/filterBar/FilterBar";
import { IncomeExpenseForm } from "../../components/form/IncomeExpenseForm";
import { DataTable } from "../../components/table/DataTable";

export const Savings = () => {
  const [filter, setFilter] = useState({ sort: false, category: "" });

  const savings = useSelector((state) => state.savings);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const applyFilters = () => {
    if (filter.sort) {
      const sortedSavings = [...savings]?.sort((a, b) => a.amount - b.amount);
      return sortedSavings?.filter(({ category }) =>
        category.includes(filter.category)
      );
    }
    return [...savings]?.filter(({ category }) =>
      category.includes(filter.category)
    );
  };

  const filteredSavings = applyFilters();

  const formHandler = (newSavings) => {
    dispatch(addNewSavings(newSavings));
  };

  useEffect(() => {
    dispatch(fetchSavings());
  }, [dispatch]);

  return (
    <div className="main-container">
      <h1>Savings</h1>

      <FilterBar categories={savings} filter={filter} setFilter={setFilter} />

      <section className="table-and-form">
        {loading ? "loading..." : <DataTable list={filteredSavings} />}
        <IncomeExpenseForm type="Savings" formHandler={formHandler} />
      </section>
    </div>
  );
};
