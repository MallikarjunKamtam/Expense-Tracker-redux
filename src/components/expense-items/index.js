import React from "react";
import "./expense-item.css";
import Card from "../../pages/Card";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

const ExpenseItem = () => {
  const { expensesList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list.filter((item) => item.title.includes(query));
  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-right"
        autoClose={1300}
        ariaHideApp={false}
        appElement={document.getElementById("root") || undefined}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((item) => <Card key={Math.random()} item={item} />)
      ) : (
        <h1>No Items added.</h1>
      )}
    </div>
  );
};

export default ExpenseItem;
