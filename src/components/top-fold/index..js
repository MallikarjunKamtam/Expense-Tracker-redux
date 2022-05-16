import React, { useState } from "react";
import "./top-fold.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";
const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const queryHandler = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };

  return (
    <div className="top-fold">
      {window.location.pathname === "/" ? (
        <div className="home-fold">
          <div className="search-bar">
            <i className="fi fi-rr-search"></i>
            <input
              type="text"
              value={query}
              placeholder="Search the expenses..."
              onChange={queryHandler}
            />
          </div>

          <Link to="/add-expense">
            <button onClick={() => {}} className="add-expense">
              Add
              <i className="fi fi-rr-add"></i>
            </button>
          </Link>
        </div>
      ) : (
        <div className="other-fold">
          <Link to="/">
            <div className="other-fold-back">
              <i className="fi fi-br-caret-left"></i>
              <label> Back</label>
            </div>
          </Link>

          <Link to="/">
            <div className="other-fold-cancel">
              <i className="fi fi-ss-cross-small"></i>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;
