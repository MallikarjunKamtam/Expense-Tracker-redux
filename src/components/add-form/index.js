import React, { useState } from "react";
import "./add-form.css";
import { Link } from "react-router-dom";
import { categories } from "../constants/add-expense";
import { addExpense } from "../../redux/actions/expenses";
import { deleteExpense } from "../../redux/actions/expenses";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from "./SuccessModal";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [catOpen, setCatOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();

  const cat = categories;

  const inputHandle = (e) => {
    setTitle(e.target.value);
  };

  const amountHandle = (e) => {
    let val = parseFloat(e.target.value);
    setAmount(val);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCatOpen(false);
  };

  const catOpenHandle = () => {
    setCatOpen(!catOpen);
  };

  const submitHandle = () => {
    if (!title || !amount || !category) {
      toast("Please entert all the details");
    } else {
      toast.success("Added !");
      setIsModal(true);
      const data = {
        title,
        category,
        amount,
        time: new Date(),
      };

      dispatch(addExpense(data));
    }
  };

  return (
    <div className="add-form-container">
      <ToastContainer
        position="bottom-right"
        autoClose={1300}
        ariaHideApp={false}
        appElement={document.getElementById("root") || undefined}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal isModal={isModal} setIsModal={setIsModal} />
      <div className="form-item">
        <div className="form-title">
          <input
            onChange={inputHandle}
            placeholder="Add expense title here..."
            type="text"
            value={title}
            name="title"
          />
        </div>
        <div className="form-amount">
          <input
            value={amount}
            onChange={amountHandle}
            placeholder="Add amount here..."
            type="number"
            name="amount"
          />
        </div>
        <div className="form-category">
          <div onClick={catOpenHandle} className="category">
            <label>{category ? `${category.title}` : "Category"}</label>
            <i className="fi fi-rs-angle-down"></i>
          </div>
          {catOpen && (
            <div>
              {cat.map((item) => (
                <div
                  onClick={() => handleCategory(item)}
                  style={{
                    borderRight: `5px solid ${item.color}`,
                  }}
                  className="cat-item"
                  key={item.id}
                >
                  <h3 key={item.id}>{item.title}</h3>
                  {item.icon}
                </div>
              ))}
            </div>
          )}
        </div>

        <div onClick={submitHandle} className="add-form-button">
          Add Expense <i className="fi fi-rr-add"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
