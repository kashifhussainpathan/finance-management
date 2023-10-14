const apiUrl = "https://financemanagement.onrender.com";

export const fetchIncome = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/income`);
    const data = await response.json();

    dispatch({ type: "FETCH_INCOME_SUCCESS", payload: data.incomes });
    dispatch({ type: "FETCH_DATA_LOADING", payload: false });
  } catch (error) {
    console.log("Error fetching income", error);
    dispatch({ type: "FETCH_DATA_ERROR", payload: "Error fetching income" });
  }
};

export const fetchExpenses = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/expense`);
    const data = await response.json();

    dispatch({ type: "FETCH_EXPENSE_SUCCESS", payload: data.expenses });
    dispatch({ type: "FETCH_DATA_LOADING", payload: false });
  } catch (error) {
    console.log("Error fetching expenses", error);
    dispatch({ type: "FETCH_DATA_ERROR", payload: "Error fetching expenses" });
  }
};

export const fetchSavings = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/savings`);
    const data = await response.json();

    dispatch({ type: "FETCH_SAVINGS_SUCCESS", payload: data.savings });
    dispatch({ type: "FETCH_DATA_LOADING", payload: false });
  } catch (error) {
    console.log("Error fetching savings", error);
    dispatch({ type: "FETCH_DATA_ERROR", payload: "Error fetching savings" });
  }
};

export const addNewIncome = (newIncome) => async (dispatch) => {
  try {
    console.log(newIncome);
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/income`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIncome),
    });

    dispatch(fetchIncome());
  } catch (error) {
    console.log("Failed to add new income", error);
    dispatch({ type: "FETCH_DATA_ERROR", payload: "Failed to add new income" });
  }
};

export const addNewExpense = (newExpense) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/expense`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExpense),
    });

    dispatch(fetchExpenses());
  } catch (error) {
    console.log("Failed to add new expense", error);
    dispatch({
      type: "FETCH_DATA_ERROR",
      payload: "Failed to add new expense",
    });
  }
};

export const addNewSavings = (newSavings) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING", payload: true });
    const response = await fetch(`${apiUrl}/savings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSavings),
    });

    dispatch(fetchSavings());
  } catch (error) {
    console.log("Failed to add new savings", error);
    dispatch({
      type: "FETCH_DATA_ERROR",
      payload: "Failed to add new savings",
    });
  }
};
