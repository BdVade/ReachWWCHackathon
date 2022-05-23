import React from 'react';

function Button({ buttonTitle, handleClick }) {
  return (
    <button
      style={{ background: '#735BDC', color: '#fff' }}
      className=" ... bg-white px-10 py-2 mx-auto mt-5 rounded-full text-white text-xl"
      onClick={handleClick}
    >
      {buttonTitle}
    </button>
  );
}

export default Button;
