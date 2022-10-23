import React from 'react';
import ReactDOM from 'react-dom';
import { FontStyles } from './Styles.js';
import './reset.css';
import './index.css';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FontStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
