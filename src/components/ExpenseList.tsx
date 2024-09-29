import { useState, useEffect } from 'react';
import Expense from './Expense.tsx';
import ExpenseForm from './ExpenseForm.tsx';
import SuccessAlert from './SuccessAlert.tsx';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
  /*console.log(JSON.parse(localStorage.getItem('expenses')));*/

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
      return updatedExpenses;
    });
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
        <Expense
          key={index}
          expense={expense}
          onDelete={() => onDeleteExpense(index)}
        />
      ))}
    </>
  );
}

export default ExpenseList;
