import React, { useState } from "react";

function AddTransactionForm({ addNewTransaction }) {
  const [dateInput, setDateInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [amountInput, setAmountInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date: dateInput,
      description: descriptionInput,
      category: categoryInput,
      amount: parseFloat(amountInput),
    }
    addNewTransaction(newTransaction);
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={dateInput} onChange={(e) => setDateInput(e.target.value)}/>
          <input type="text" name="description" placeholder="Description" value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)}/>
          <input type="text" name="category" placeholder="Category" value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={amountInput} onChange={(e) => setAmountInput(e.target.value)}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
