import React, { createContext, useState, useContext } from 'react';

interface ExpenseGroup {
  ID: string;
  name: string;
  description: string;
  budget: string;
}

interface ExpenseGroupContextType {
  expenseGroups: ExpenseGroup[];
  addExpenseGroup: (group: ExpenseGroup) => void;
}

const ExpenseGroupContext = createContext<ExpenseGroupContextType | undefined>(
  undefined
);

export const useExpenseGroupContext = () => {
  const context = useContext(ExpenseGroupContext);
  if (!context) {
    throw new Error(
      'useExpenseGroupContext must be used within an ExpenseGroupProvider'
    );
  }
  return context;
};

export const ExpenseGroupProvider: React.FC = ({ children }) => {
  const [expenseGroups, setExpenseGroups] = useState<ExpenseGroup[]>([]);

  const addExpenseGroup = (group: ExpenseGroup) => {
    setExpenseGroups((prevGroups) => [...prevGroups, group]);
  };

  return (
    <ExpenseGroupContext.Provider value={{ expenseGroups, addExpenseGroup }}>
      {children}
    </ExpenseGroupContext.Provider>
  );
};
