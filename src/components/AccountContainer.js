import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactionData, setTransactionData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(res => res.json())
      .then(data => setTransactionData(data))
  },[])
  
  const addNewTransaction = (newTransaction) => {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newTransaction)
    }) 
    .then(res => res.json())
    .then(data => setTransactionData(
      [...transactionData, data]
    ))    
  }

  const handleSearch = (search) => {
    setSearchInput(search)
  }

  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddTransactionForm addNewTransaction={addNewTransaction}/>
      <TransactionsList transactionData={transactionData.filter(transaction => transaction.description.toLowerCase().includes(searchInput.toLowerCase()))}/>
    </div>
  );
}

export default AccountContainer;
