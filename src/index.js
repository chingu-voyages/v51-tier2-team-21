import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import ExpenseGroup from './components/ExpenseGroup.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
  {
    path: "/create-expense-group",
    element: <Layout element={<ExpenseGroup/>} />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


