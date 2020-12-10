import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Header(){

  return (
    <React.Fragment>
      <div className="header">
        <h1> Help Queue</h1>
          <Link to="/">Home</Link>
          <div id="header-link">
            <Link to="/signin">Sign In</Link>
          </div>
        
        <div id="error-message"></div>
      </div>
    </React.Fragment>
  );
}

export default Header;