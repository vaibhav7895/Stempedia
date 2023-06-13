// store.js
import { legacy_createStore } from 'redux';

//  initial state
const initialState = {
  value: ''
};

//  reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

// Create the Redux store
const store = legacy_createStore(reducer);

export default store;
