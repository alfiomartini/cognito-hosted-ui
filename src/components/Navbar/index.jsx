import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Navbar = ({ auth, doSignOut }) => {
  return (
    <div className="navbar">
      <div className="logo">Cognito Hosted-UI</div>

      {!auth && (
        <Link to="/signIn" className="link">
          Sign In
        </Link>
      )}
      {auth && (
        <Link to="/signOut" className="link" onClick={() => doSignOut()}>
          Sign Out
        </Link>
      )}
    </div>
  );
};
