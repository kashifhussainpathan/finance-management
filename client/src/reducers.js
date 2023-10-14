const initialState = {
  income: [],
  expenses: [],
  savings: [],
  loading: false,
  error: "",
};

const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return { ...state, loading: action.payload };

    case "FETCH_INCOME_SUCCESS":
      return { ...state, income: action.payload };

    case "FETCH_EXPENSE_SUCCESS":
      return { ...state, expenses: action.payload };

    case "FETCH_SAVINGS_SUCCESS":
      return { ...state, savings: action.payload };

    case "FETCH_DATA_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default financeReducer;
