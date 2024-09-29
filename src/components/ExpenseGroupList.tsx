import React, { useState } from 'react';
import { useExpenseGroupContext } from '../context/ExpenseGroupContext.tsx';
import DeleteAlert from './DeleteAlert.tsx';
import UpdateExpenseGroup from './UpdateExpenseGroup.tsx';

const ExpenseGroupList = () => {
  const { expenseGroups, deleteExpenseGroup } = useExpenseGroupContext();
  const [isDelete, setIsDelete] = useState(false);
  const [editingGroup, setEditingGroup] = useState<ExpenseGroup | null>(null);

  return (
    <div>
      <h1>Expense Groups</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Group name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Budget
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {expenseGroups.length === 0 && <tr>No expense groups found</tr>}
            {expenseGroups.map((group) => (
              <tr
                key={group.ID}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize"
                >
                  {group.name}
                </th>
                <td className="px-6 py-4 text-white">
                  {group.description.slice(0, 30)} ...
                </td>
                <td className="px-6 py-4 text-white">${group.budget}</td>
                <td className="px-6 py-4 flex justify-start items-center gap-3">
                  <button
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                    type="button"
                    className="border font-medium text-yellow-400 p-2"
                    onClick={() => setEditingGroup(group)}
                  >
                    Edit
                  </button>
                  <button
                    className="border font-medium text-red-700 p-2"
                    onClick={() => {
                      deleteExpenseGroup(group.ID);
                      setIsDelete(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isDelete ? <DeleteAlert text="an expense group" /> : null}
        {editingGroup && (
          <UpdateExpenseGroup
            group={editingGroup}
            onClose={() => setEditingGroup(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ExpenseGroupList;
