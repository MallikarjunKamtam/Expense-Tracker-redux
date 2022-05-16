import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
} from "../action-types/expenses";

// const initialList = () => {
//   const list = localStorage.getItem("expense-list");
//   let expenses = [];
//   if (list) {
//     expenses = JSON.parse(list);
//   }
//   return expenses;
// };

const initialState = {
  expensesList: [],
  query: "",
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      // localStorage.setItem(
      //   "expense-list",
      //   JSON.stringify([...state.expensesList, action.data])
      // );
      return {
        ...state,
        expensesList: [...state.expensesList, action.data],
      };
    }
    case DELETE_EXPENSE: {
      const { data } = action;
      const updatedList = state.expensesList.filter(
        (item) => item.createdAt !== data.createdAt
      );

      // localStorage.setItem("expense-list", JSON.stringify(updatedList));
      return {
        ...state,
        expensesList: updatedList,
      };
    }

    case SEARCH_EXPENSE:
      const { query } = action;
      return {
        ...state,
        query,
      };

    default:
      return state;
  }
};
