import React, { createContext, useState, useContext, useEffect } from 'react';

interface ExpenseGroup {
  ID: string;
  name: string;
  description: string;
  budget: string;
}

interface ExpenseGroupContextType {
  expenseGroups: ExpenseGroup[];
  addExpenseGroup: (group: ExpenseGroup) => void;
  deleteExpenseGroup: (id: string) => void;
  updateExpenseGroup: (updatedGroup: ExpenseGroup) => void;
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
  const [expenseGroups, setExpenseGroups] = useState<ExpenseGroup[]>(() => {
    const storedGroups = localStorage.getItem('expenseGroups');
    return storedGroups ? JSON.parse(storedGroups) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenseGroups', JSON.stringify(expenseGroups));
  }, [expenseGroups]);

  const addExpenseGroup = (group: ExpenseGroup) => {
    setExpenseGroups((prevGroups) => {
      if (prevGroups.some((g) => g.ID === group.ID)) {
        return prevGroups;
      }
      return [...prevGroups, group];
    });
  };

  const deleteExpenseGroup = (id: string) => {
    setExpenseGroups((prevGroups) =>
      prevGroups.filter((group) => group.ID !== id)
    );
  };

  const updateExpenseGroup = (updatedGroup: ExpenseGroup) => {
    setExpenseGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.ID === updatedGroup.ID ? updatedGroup : group
      )
    );
  };

  return (
    <ExpenseGroupContext.Provider
      value={{
        expenseGroups,
        addExpenseGroup,
        deleteExpenseGroup,
        updateExpenseGroup,
      }}
    >
      {children}
    </ExpenseGroupContext.Provider>
  );
};
