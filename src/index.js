import React from "react";
import './index.css';
import ReactDOM from "react-dom";
import App from './components/App/';
import AppFooter from './components/AppFooter/AppFooter';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppFooter />
  </React.StrictMode>,
  document.getElementById("root")
);
