import React, { useState } from 'react';
import { useExpenseGroupContext } from '../context/ExpenseGroupContext.tsx';

interface EditExpenseGroupModalProps {
  group: ExpenseGroup;
  onClose: () => void;
}

const UpdateExpenseGroup: React.FC<EditExpenseGroupModalProps> = ({
  group,
  onClose,
}) => {
  const { updateExpenseGroup } = useExpenseGroupContext();
  const [name, setName] = useState(group.name);
  const [description, setDescription] = useState(group.description);
  const [budget, setBudget] = useState(group.budget);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedGroup = { ...group, name, description, budget };
    updateExpenseGroup(updatedGroup);
    onClose();
  };

  return (
    <div
      id="default-modal"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Edit Expense Group
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
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
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-lg"
              >
                Update
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white p-2 rounded-lg"
                onClick={onClose}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateExpenseGroup;
