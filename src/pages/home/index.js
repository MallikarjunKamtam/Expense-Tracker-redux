import React from "react";
import TopFold from "../../components/top-fold/index.";
import "./home.css";
import ExpenseItem from "../../components/expense-items";

const Home = () => {
  return (
    <div>
      <TopFold />
      <ExpenseItem />
    </div>
  );
};

export default Home;
