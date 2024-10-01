import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ExpenseGroup from './components/ExpenseGroup.tsx';
import ExpenseGroupList from './components/ExpenseGroupList.tsx';
import { ExpenseGroupProvider } from './context/ExpenseGroupContext.tsx';
import Hero from './components/Hero.tsx';
import LandingPage from './components/LandingPage.tsx';
import Layout from './Layout.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ExpenseList from './components/ExpenseList.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/create-expense-group',
    element: <Layout element={<ExpenseGroup />} />,
  },
  {
    path: '/expense-group-list',
    element: <Layout element={<ExpenseGroupList />} />,
  },
  {
    path: '/expenses',
    element: <Layout element={<ExpenseList />} />,
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
