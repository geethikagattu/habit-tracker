import React from 'react';                          // Core React library
import ReactDOM from 'react-dom/client';            // For modern React 18 root API
import App from './App';                            // main App component

// reate root DOM node and mount the app inside #root div in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
