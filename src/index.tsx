import React from 'react';
import ReactDOM from 'react-dom';
import combineReducers from './store/reducers';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './App';


export const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
