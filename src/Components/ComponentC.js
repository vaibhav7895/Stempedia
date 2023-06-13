// ComponentC.js
import React from 'react';
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const value = useSelector((state) => state.value);

  return (
    <div>
      <p>Value: {value}</p>
    </div>
  );
};

export default ComponentC;
