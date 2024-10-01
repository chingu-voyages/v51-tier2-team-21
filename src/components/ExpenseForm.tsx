import { useEffect, useState } from 'react';
import CloseBtn from '../img/close-button.svg';

function ExpenseForm({ createExpense, onClose, editExpense }) {
  const [expenseName, setExpenseName] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (editExpense) {
      setExpenseName(editExpense.expenseName);
      setExpenseType(editExpense.expenseType);
      setDescription(editExpense.description);
      setAmount(editExpense.amount);
    }
  }, [editExpense]);

  const onSaveExpense = (event) => {
    event.preventDefault();

    //Create new Expense
    const newExpense = {
      expenseName,
      expenseType,
      description,
      amount: parseFloat(amount),
    };

    if (editExpense) {
      //Edit
      createExpense(newExpense, editExpense.index);
    } else {
      //Create
      createExpense(newExpense);
    }

    //Clear fields
    setExpenseName('');
    setExpenseType('');
    setDescription('');
    setAmount('');
  };

  return (
    <div className="backdrop fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
      <div className="relative w-full max-w-2xl max-h-full rounded-2xl bg-white p-14 content-center">
        <form onSubmit={onSaveExpense}>
          <button
            type="button"
            className="absolute top-8 right-14 hover:bg-gray-200 rounded-lg  dark:hover:bg-gray-600"
            onClick={onClose}
          >
            <img src={CloseBtn} className="w-4 h-4 m-2" alt="Close" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {editExpense ? 'Edit expense' : 'Create new expense'}
          </h2>
          <div className="flex flex-col gap-2">
            <input
              className="input-style"
              placeholder="Enter expense name"
              type="text"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              required
            />
            <select
              className="invalid:text-gray-400 input-style"
              value={expenseType}
              onChange={(e) => setExpenseType(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select an expense type
              </option>
              <option className="text-black" value="Birthday">
                Birthday
              </option>
              <option className="text-black" value="Corporate event">
                Corporate event
              </option>
              <option className="text-black" value="Holiday">
                Holiday
              </option>
            </select>
            <textarea
              rows={4}
              className="p-2.5 w-full text-sm rounded-lg input-style"
              placeholder="Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <input
              className="input-style"
              placeholder="Enter amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <button className="button-style" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
