import React from '.cache/calculadora/node_modules/@types/react';
import ReactDOM from '.cache/calculadora/node_modules/@types/react-dom/client';
import '.cache/calculadora/src/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

