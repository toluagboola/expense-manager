import "bulma/css/bulma.min.css";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import { Plus } from "react-feather";
import data from "./data";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Table from "./components/Table";
import AddExpenseForm from "./components/AddExpenseForm";

const existingExpenses = JSON.parse(localStorage.getItem("expenses"));

function App() {
  const [dialog, setDialog] = useState({
    eventID: 0,
    isBeingEdited: false,
    isModalActive: false,
  });
  const [expenses, setExpenses] = useState(existingExpenses || data);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const isActive = dialog.isModalActive ? "is-active" : "";

  // Refs for input fields
  const merchantRef = useRef();
  const totalRef = useRef();
  const dateRef = useRef();
  const commentRef = useRef();

  // Refs for filters
  const fromDateRef = useRef();
  const toDateRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();
  const merchantFilterRef = useRef();

  // Handle expense saving and editing
  const addExpense = (id) => {
    const merchant = merchantRef.current.value;
    const total = totalRef.current.value;
    const date = dateRef.current.value;
    const comment = commentRef.current.value;

    // If expense does not yet exist, create new expense and save to state
    if (id === 0) {
      if (merchant !== "" && total !== "") {
        const expense = {
          id: Date.now(),
          merchant: merchant,
          total: total,
          date: date,
          comment: comment,
        };

        setExpenses([...expenses, expense]);
        closeModal();
      } else {
        alert("Please fill all required fields.");
      }
    } else {
      // If expense already exists, update its values
      const state = [...expenses];
      const index = state.findIndex((item) => item.id === id);

      state[index].merchant = merchantRef.current.value;
      state[index].total = totalRef.current.value;
      state[index].date = dateRef.current.value;
      state[index].comment = commentRef.current.value;

      setExpenses(state);
      closeModal();
    }
  };

  // Compute total expense amount
  const calculateTotal = (data) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += parseFloat(data[i].total);
    }

    return (Math.round(sum * 100) / 100).toLocaleString();
  };

  // Handle expense filtering
  const filterExpenses = () => {
    const fromDate = fromDateRef.current.value;
    const toDate = toDateRef.current.value;
    const min = minRef.current.value;
    const max = maxRef.current.value;
    const merchant = merchantFilterRef.current.value;

    setIsFiltered(true);

    const filteredExpenses = expenses.filter((item) => {
      if (fromDate && !(item.date >= fromDate)) {
        return false;
      }

      if (toDate && !(item.date <= toDate)) {
        return false;
      }

      if (min && !(item.total >= min)) {
        return false;
      }

      if (max && !(item.total <= max)) {
        return false;
      }

      if (merchant && !(item.merchant === merchant)) {
        return false;
      }

      return true;
    });

    setFiltered(filteredExpenses);
  };

  // Clear filters
  const clearFilters = () => {
    fromDateRef.current.value = "";
    toDateRef.current.value = "";
    minRef.current.value = "";
    maxRef.current.value = "";
    merchantFilterRef.current.value = "";

    setFiltered([]);
    setIsFiltered(false);
  };

  const closeModal = () => {
    merchantRef.current.value = "";
    totalRef.current.value = "";
    dateRef.current.value = "";
    commentRef.current.value = "";

    setDialog({
      eventID: 0,
      isBeingEdited: false,
      isModalActive: false,
    });
  };

  // Side effect to save expenses to local storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Make Esc key close modal
  useEffect(() => {
    document.onkeydown = function (e) {
      if (e.key === "Escape") {
        closeModal();
      }
    };
  });

  return (
    <>
      <Navbar />
      <SideBar
        clearFilters={clearFilters}
        filterExpenses={filterExpenses}
        refs={{
          fromDateRef: fromDateRef,
          toDateRef: toDateRef,
          minRef: minRef,
          maxRef: maxRef,
          merchantFilterRef: merchantFilterRef,
        }}
      />

      <div className="App">
        <AddExpenseForm
          dialog={dialog}
          isActive={isActive}
          closeModal={closeModal}
          refs={{
            merchantRef: merchantRef,
            totalRef: totalRef,
            dateRef: dateRef,
            commentRef: commentRef,
          }}
          addExpense={addExpense}
        />

        <div className="container">
          <Table
            data={!isFiltered ? expenses : filtered}
            setDialog={setDialog}
            refs={{
              merchantRef: merchantRef,
              totalRef: totalRef,
              dateRef: dateRef,
              commentRef: commentRef,
            }}
          />
        </div>

        <div className="sidebar-right is-2 p-4 has-text-centered">
          <h3 className="is-size-4">Total amount spent:</h3>
          <h3 className="is-size-3">
            ${isFiltered ? calculateTotal(filtered) : calculateTotal(expenses)}
          </h3>
        </div>

        <Plus
          className="floating-plus"
          onClick={() =>
            setDialog({
              ...dialog,
              isModalActive: true,
            })
          }
        />
      </div>
    </>
  );
}

export default App;
