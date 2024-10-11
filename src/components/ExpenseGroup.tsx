import React, { useState } from 'react';
import { useExpenseGroupContext } from '../context/ExpenseGroupContext.tsx';

const ExpenseGroup = () => {
  const { addExpenseGroup } = useExpenseGroupContext();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [selectedPeople, setSelectedPeople] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newGroup = {
      ID: Date.now().toString(),
      name,
      description,
      budget,
      people: selectedPeople,
    };
    addExpenseGroup(newGroup);
    setIsSuccess(true);
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selected: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelectedPeople(selected);
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
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />
        <select
          multiple
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedPeople}
          onChange={handlePeopleChange}
        >
          <option value="Person1">Person 1</option>
          <option value="Person2">Person 2</option>
          <option value="Person3">Person 3</option>
          {/* Add more options as needed */}
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
        >
          Submit
        </button>
      </form>
      {isSuccess && <p className="text-green-500">Expense group saved successfully!</p>}
    </div>
  );
};

export default ExpenseGroup;
