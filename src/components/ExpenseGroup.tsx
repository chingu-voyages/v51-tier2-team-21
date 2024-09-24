import React, { useEffect, useState } from 'react';
import { useExpenseGroupContext } from '../context/ExpenseGroupContext.tsx';
import SuccessAlert from './SuccessAlert.tsx';
import DeleteAlert from './DeleteAlert.tsx';

export interface ExpenseGroup {
  ID: string;

  name: string;

  description: string;

  budget: string;
}

const ExpenseGroup = () => {
  const { addExpenseGroup } = useExpenseGroupContext();
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const idGenerator = () => {
    const numericalPart = Math.floor(Math.random() * 10 ** 9);
    setID(String(numericalPart));
  };

  useEffect(() => {
    idGenerator();
  }, []);

  useEffect(() => {
    const storedExpenseGroups = JSON.parse(
      localStorage.getItem('expenseGroups') || '[]'
    );
    storedExpenseGroups.forEach((group: any) => addExpenseGroup(group));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save data to localstorage
    const newExpenseGroup = { ID, name, description, budget };
    addExpenseGroup(newExpenseGroup);
    const storedExpenseGroups = JSON.parse(
      localStorage.getItem('expenseGroups') || '[]'
    );
    storedExpenseGroups.push(newExpenseGroup);
    localStorage.setItem('expenseGroups', JSON.stringify(storedExpenseGroups));
    // Reset form
    setName('');
    setDescription('');
    setBudget('');
    // Success message
    setIsSuccess(true);
  };

  return (
    <div>
      <h1>Expense Group</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Group Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              />
            </svg>
          </div>
          <input
            type="number"
            className="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Enter Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Create
        </button>
      </form>
      {isSuccess ? <SuccessAlert /> : ''}
    </div>
  );
};

export default ExpenseGroup;
