import { useState } from "react";
import LinebarChart from "../LinebarChart/LinebarChart";
import "./Dashboard.css";

const Dashboard = () => {
  const [walletBalance, setWalletBalance] = useState(
    localStorage.getItem("walletBalance")
      ? JSON.parse(localStorage.getItem("walletBalance"))
      : 5000
  );

  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")?.length > 0
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );

  const handleExpensesListUpdate = (expenses) => {
    setExpenses(expenses);
    const totalBalance =
      localStorage.getItem("totalBalance") - getTotalExpenses();

    setWalletBalance(totalBalance);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  };

  const getTotalExpenses = () => {
    return expenses.reduce(
      (total, expense) => total + parseInt(expense.price, 10),
      0
    );
  };

  const categories = [
    "Food",
    "Entertainment",
    "Travel",
    "Shopping",
    "Grocery",
    "Others",
  ];

  return (
    <div>
      <LinebarChart data={expenses} category={categories} />
    </div>
  );
};

export default Dashboard;
