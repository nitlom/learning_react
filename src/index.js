import React from "react";
import './index.css';
import ReactDOM from "react-dom";
import App from './components/App/';
import AppFooter from './components/AppFooter/AppFooter';
import AppContent from './components/AppContent/AppContent';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppContent />
    <AppFooter />
  </React.StrictMode>,
  document.getElementById("root")
);
