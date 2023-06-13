// ComponentB.js
import React from 'react';
import { useDispatch } from 'react-redux';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({ type: 'UPDATE_VALUE', payload: event.target.value });
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ComponentB;
