// src/components/CustomButton.js
import React from 'react';

function CustomButton({ onClick, children }) {
  return (
    <button onClick={onClick} className="custom-button">
      {children}
    </button>
  );
}

export default CustomButton;
