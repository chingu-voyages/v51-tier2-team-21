import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer.tsx';

function Layout({ element }) {
  return (
    <div>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Link to="/" className="flex items-center ps-2.5 mb-5">
            <img
              src="https://img.icons8.com/doodle/48/tax.png"
              className="h-6 me-3 sm:h-7"
              alt="Expense Tracker Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Expense Tracker
            </span>
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/create-expense-group"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src="https://img.icons8.com/sf-black/30/group-foreground-selected.png"
                  alt="group-foreground-selected"
                />
                <span className="ms-3">Create Expense Group</span>
              </Link>
            </li>
            <li>
              <Link
                to="/expense-group-list"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src="https://img.icons8.com/sf-black/30/group-foreground-selected.png"
                  alt="group-foreground-selected"
                />
                <span className="ms-3">Expense Group List</span>
              </Link>
            </li>
            <li>
              <Link
                to="/expenses"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src="https://img.icons8.com/?size=30&id=gNFSfoMaJFAN&format=png&color=000000"
                  alt="expense-foreground-selected"
                />
                <span className="ms-3">Expenses</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {element}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
