import { useState } from 'react';
import Expense from './Expense.tsx';
import ExpenseForm from './ExpenseForm.tsx';
import SuccessAlert from './SuccessAlert.tsx';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onShowForm = (event) => {
    event.preventDefault();
    setIsFormVisible(!isFormVisible);
  };

  const onCloseForm = () => {
    setIsFormVisible(false);
  };

  //Create new Expense
  const onCreateExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    //Close form
    onCloseForm();
    // Success message
    setIsSuccess(true);
  };

  return (
    <>
      <form className="flex justify-between p-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Expenses
        </h2>
        <button type="button" className="button-style" onClick={onShowForm}>
          Create new
        </button>
      </form>
      {isFormVisible && (
        <ExpenseForm createExpense={onCreateExpense} onClose={onCloseForm} />
      )}
      {isSuccess ? <SuccessAlert text="a new Expense" /> : ''}
      {expenses.map((expense, index) => (
        <Expense key={index} expense={expense} />
      ))}
    </>
  );
}

export default ExpenseList;
