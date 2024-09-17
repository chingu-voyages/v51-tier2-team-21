import Button from "../src/components/button/button.tsx";
import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-300 to-indigo-200 h-screen">
      <h1 className="py-10 text-3xl bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent">
        Effortlessly Manage Shared Expenses
      </h1>
      <Button label="Get Started" />
    </div>
  );
}

export default App;
