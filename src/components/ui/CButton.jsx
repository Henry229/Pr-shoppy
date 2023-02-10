import React from 'react';

const CButton = ({ text, onClick }) => {
  return (
    <button
      className='bg-purple-500 text-white rounded-lg py-2 px-4'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CButton;
