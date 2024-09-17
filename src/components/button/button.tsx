import React from "react";

interface BtnProps {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<BtnProps> = ({ label, icon }) => {
  
  return (
    <button
      className="text-black px-20 py-2 bg-[#FFC107] rounded-lg hover:bg-[#f6cb48]"
      onClick={() => {
        console.log("logout");
      }}
    >
      {label}
      {icon && <span className="ml-4">{icon}</span>}
    </button>
  );
};

export default Button;