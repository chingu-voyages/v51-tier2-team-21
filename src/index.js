import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ExpenseGroup from './components/ExpenseGroup.tsx';
import { ExpenseGroupProvider } from './context/ExpenseGroupContext.tsx';
import ExpenseGroupList from './components/ExpenseGroupList.tsx';
import Hero from './components/Hero.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
  },
  {
    path: '/create-expense-group',
    element: <Layout element={<ExpenseGroup />} />,
  },
  {
    path: '/expense-group-list',
    element: <Layout element={<ExpenseGroupList />} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExpenseGroupProvider>
      <RouterProvider router={router} />
    </ExpenseGroupProvider>
  </React.StrictMode>
);
