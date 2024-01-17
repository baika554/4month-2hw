import React, { useState } from 'react';

const ColorToggleSquare = () => {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed((prevIsRed) => !prevIsRed);
  };

  return (
    <div>
      <div
        style={{
          width: '300px',
          height: '300px',
          margin: '0 auto',
          backgroundColor: isRed ? 'red' : 'blue',
          cursor: 'pointer',
        }}
        onClick={toggleColor}
      />
      <div
        style={{
          width: '300px',
          height: '300px',
          margin: '0 auto',
          backgroundColor: isRed ? 'blue' : 'red',
          cursor: 'pointer',
        }}
        onClick={toggleColor}
      />
    </div>
  );
};

export default ColorToggleSquare;
