import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';

import App from './App';

// Importing Reducers
import authReducer from "./Controllers/Redux/authSlice";
import bugReducer from "./Controllers/Redux/bugSlice";
import userReducer from "./Controllers/Redux/userSlice";

// Redux configuration (Reducer, Store)
const reducer = combineReducers({
  auth: authReducer,
  bugs: bugReducer,
  user: userReducer
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

// 


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
