import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieState from './Context/MovieState';
import UserState from './Context/UserState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieState>
      <UserState>
    <App />
    </UserState>
    </MovieState>
  </React.StrictMode>
);

