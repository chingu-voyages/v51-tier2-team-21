import React from "react";
import { useExpenseGroupContext } from "../context/ExpenseGroupContext.tsx";

const ExpenseGroupList = () => {
  const { expenseGroups } = useExpenseGroupContext();

  return (
    <div>
      <h1>Expense Groups</h1>
      {expenseGroups.length === 0 && <p>No expense groups found</p>}
      <ul>
        {expenseGroups.map((group, index) => (
          <li key={index}>
            <h2>{group.name}</h2>
            <p>{group.description}</p>
            <p>Budget: ${group.budget}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseGroupList;
