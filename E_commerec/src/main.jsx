import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './Redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
)
