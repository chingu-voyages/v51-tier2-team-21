import React from "react";
import Footer from "./components/Footer.tsx";
import ExpenseGroup from "./pages/ExpenseGroup.tsx";

function Layout() {
  return (
    <div>
      <Footer />
      <ExpenseGroup />
    </div>
  );
}

export default Layout;
