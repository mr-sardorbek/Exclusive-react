import React from 'react';

const Button = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`add-to-cart-btn font-poppins px-4 py-2 rounded ${
        disabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#DB4444] text-white"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;


