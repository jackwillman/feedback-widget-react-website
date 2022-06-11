import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';

import '@/stylesheets/global.css';
import '@/stylesheets/widget.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);