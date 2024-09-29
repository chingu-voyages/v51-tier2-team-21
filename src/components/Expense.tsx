interface ExpenseProps {
  expense: string;
}

const Expense: React.FC<ExpenseProps> = ({ expense, onDelete }) => {
  return (
    <ul className="flex text-left">
      <li className="flex-1">{expense.expenseName}</li>
      <li className="flex-1">{expense.expenseType}</li>
      <li className="flex-1">{expense.description}</li>
      <li className="flex-1">{expense.amount}</li>
      <li className="flex-1 text-right">
        <button
          type="button"
          onClick={onDelete}
          className="border font-medium text-red-700 p-2"
        >
          Delete
        </button>
      </li>
    </ul>
  );
};

export default Expense;
