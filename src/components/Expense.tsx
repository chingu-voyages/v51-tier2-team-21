interface ExpenseProps {
  expense: string;
}

const Expense: React.FC<ExpenseProps> = ({ expense }) => {
  return (
    <ul className="flex justify-between">
      <li>{expense.expenseName}</li>
      <li>{expense.expenseType}</li>
      <li>{expense.description}</li>
      <li>{expense.amount}</li>
    </ul>
  );
};

export default Expense;
