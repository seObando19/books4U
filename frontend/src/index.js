import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, } from 'react-router-dom'
import './css/index.css';
import './css/navBar.css';
import './css/searchBar.css';
import './css/contact.css';
import './css/donate.css';
import './css/login.css';
import './css/forgot.css'
import './css/signup.css'
import App from './App';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
