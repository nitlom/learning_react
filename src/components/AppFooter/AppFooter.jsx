import React, { Component, Fragment } from "react";
import './AppFooter.css';

export default class AppFooter extends Component {
  render() {
    const currentYear = new Date().getUTCFullYear();
    return (
      <>
        <hr />
        <p className="footer">&copy; 2020 - {currentYear}, OZ1TMM</p>
      </>
    );
  }
}
