import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import styles from './styles/global.css'; // inside src/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className={styles.global}>
      <App />
    </div>
  </BrowserRouter>
);
