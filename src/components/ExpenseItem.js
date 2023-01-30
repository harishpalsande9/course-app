import React from "react";
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  return (
    <div className="expenseListBox">
      <div className="expenseListDate">
        <span> {Date()}</span>
      </div>
      <div className="expenseListDescribtion">
        <span> Car Insurance</span>
      </div>
      <div className="expenseListPrice">
        <span>$290.50 </span>
      </div>
    </div>
  );
}

export default ExpenseItem;
