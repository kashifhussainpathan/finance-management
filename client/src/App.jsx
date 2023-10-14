import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { SideBar } from "./components/sideBar/SideBar.jsx";
import { Home } from "./pages/home/Home.jsx";
import { Expense } from "./pages/expenses/Expense.jsx";
import { Income } from "./pages/income/Income.jsx";
import { Savings } from "./pages/savings/Savings.jsx";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="app-rightSide">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expense />} />
          <Route path="/savings" element={<Savings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
