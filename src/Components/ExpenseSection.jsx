import React, { useContext } from "react";

import GlobalContext from "../Context/GlobalContext";

const ExpenseSection = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter(transaction => {
      if (transaction.amount > 0) {
        return true;
      }
    })
    .reduce((p, c) => {
      return p + c.amount;
    }, []);

  const expense = transactions
    .filter(transaction => {
      if (transaction.amount < 0) {
        return true;
      }
    })
    .reduce((p, c) => {
      return p + c.amount;
    }, []);

  return (
    <div id="current-status" className="main-section">
      <div id="income" className="balance">
        <span>
          <p>Income</p>
          <h1>₹{income}</h1>
        </span>
      </div>
      <div id="expense" className="balance">
        <span>
          <p>Current Expense</p>
          <h1>₹{expense}</h1>
        </span>
      </div>
    </div>
  );
};

export default ExpenseSection;
