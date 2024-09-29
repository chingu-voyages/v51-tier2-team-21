import { useState, useEffect } from 'react';
import Expense from './Expense.tsx';
import ExpenseForm from './ExpenseForm.tsx';
import SuccessAlert from './SuccessAlert.tsx';
import DeleteAlert from './DeleteAlert.tsx';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    //Load Expenses
    const storedExpenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    setExpenses(storedExpenses);
  }, []);

  const onShowForm = (event) => {
    event.preventDefault();
    setIsFormVisible(!isFormVisible);
  };

  const onCloseForm = () => {
    setIsFormVisible(false);
  };

  //Create new Expense
  const onCreateExpense = (newExpense) => {
    setExpenses((prevExpenses) => {
      //Add a new Expense
      const updatedExpenses = [...prevExpenses, newExpense];

      //Save Expense in localStorage
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));

      return updatedExpenses;
    });

    //Close form
    onCloseForm();
    // Success message
    setIsSuccess(true);
    //Hide message
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const onDeleteExpense = (indexToDelete) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (_, index) => index !== indexToDelete
      );
      //Update Expense List
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));

      //Delete message
      setIsDelete(true);
      //Hide message
      setTimeout(() => setIsDelete(false), 3000);

      return updatedExpenses;
    });
  };

  return (
    <>
      <form className="flex justify-between p-4 gap-4 flex-wrap">
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
      {isDelete ? <DeleteAlert text="an Expense" /> : ''}
      <div className=" p-4 rounded-xl shadow-md ">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 text-center md:text-left rounded-t-lg text-xs font-bold shadow-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <li>Name</li>
          <li>Category</li>
          <li>Description</li>
          <li className="md:text-right">Amount</li>
        </ul>

        {expenses.map((expense, index) => (
          <Expense
            key={index}
            expense={expense}
            onDelete={() => onDeleteExpense(index)}
          />
        ))}
      </div>
    </>
  );
}

export default ExpenseList;
