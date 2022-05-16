import React from "react";
import { useDispatch } from "react-redux";

import { deleteExpense } from "../redux/actions/expenses";
import { toast } from "react-toastify";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const deleteHandle = () => {
    dispatch(deleteExpense(item));
    toast.warning("Deleted item!");
  };

  return (
    // <div>This is card</div>
    <div
      style={{ borderLeft: `10px solid ${item.category.color}` }}
      key={Math.random()}
      className="item"
    >
      <div className="item-left">
        <div className="item-icon">{item.category.icon}</div>
        <div>
          <h2 className="item-title">{item.title}</h2>
          <p className="time">{item.time.toLocaleString()}</p>
        </div>
      </div>
      <div className="item-right">
        <p className="item-amount"> ₹ {item.amount}</p>
        <div onClick={deleteHandle} className="delete-icon">
          <i className="fi fi-rs-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
