import React from 'react';

const SuccessAlert = ({ text }) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
      role="alert"
    >
      <span className="font-medium">You Successfully created {text}</span>
    </div>
  );
};

export default SuccessAlert;
