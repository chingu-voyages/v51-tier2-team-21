interface ExpenseProps {
  expense: string;
  image?: string;
  onEdit: string;
  onDelete: string;
}

const Expense: React.FC<ExpenseProps> = ({ expense, onEdit, onDelete }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 text-center text-sm md:text-left word-wrap border-b shadow-md even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 dark:border-gray-700 font-medium text-gray-900 dark:text-white capitalize">
      <li className="break-all">{expense.expenseName}</li>
      <li>{expense.expenseType}</li>
      <li className="truncate">{expense.description}</li>
      <li className="md:text-right">{expense.amount}</li>
      {expense.image && (
        <div>
          <img src={expense.image} alt="expense reciept" style={{ width: "100px", height: "100px", objectFit: "cover" }}/>
        </div>
      )}
        <li className="sm:col-span-2 md:col-start-3 lg:col-start-5">
        <button
          type="button"
          onClick={onEdit}
          className="border font-medium text-yellow-400 p-2 w-1/2"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="border font-medium text-red-700 p-2 w-1/2"
        >
          Delete
        </button>
      </li>

      
      
    </ul>
  );
};

export default Expense;
