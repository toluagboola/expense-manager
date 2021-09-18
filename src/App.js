import "./App.css";
import "bulma/css/bulma.min.css";
import { useState, useEffect, useRef } from "react";
import { Plus } from "react-feather";
import data from "./data";
import Navbar from "./components/Navbar";
import AddExpenseForm from "./components/AddExpenseForm";

const existingExpenses = JSON.parse(localStorage.getItem("expenses"));

function App() {
  const [dialog, setDialog] = useState(false);
  const isActive = dialog ? "is-active" : "";

  const [expenses, setExpenses] = useState(existingExpenses || data);

  // Refs for input fields
  const merchantRef = useRef();
  const totalRef = useRef();
  const dateRef = useRef();
  const commentRef = useRef();

  // Save new expense to state
  const addExpense = () => {
    const merchant = merchantRef.current.value;
    const total = totalRef.current.value;
    const date = dateRef.current.value;
    const comment = commentRef.current.value;

    if (merchant !== "" && total !== "") {
      const expense = {
        id: Date.now(),
        merchant: merchant,
        total: total,
        date: date,
        comment: comment,
      };

      setExpenses([...expenses, expense]);
      setDialog(false);
    } else {
      alert("Please fill all required fields.");
    }
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="App">
      <Navbar />
      <AddExpenseForm
        isActive={isActive}
        setDialog={setDialog}
        refs={{
          merchantRef: merchantRef,
          totalRef: totalRef,
          dateRef: dateRef,
          commentRef: commentRef,
        }}
        addExpense={addExpense}
      />

      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <td>Date</td>
            <td>Merchant</td>
            <td>Total</td>
            <td>Comment</td>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.merchant}</td>
              <td>${item.total}</td>
              <td>{item.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Plus className="floating-plus" onClick={() => setDialog(true)} />
    </div>
  );
}

export default App;
