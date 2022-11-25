import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

// TODO: i think we load a font here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
