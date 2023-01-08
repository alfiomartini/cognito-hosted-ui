import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

export const Navbar = ({ auth, doSignOut }) => {
  const history = useHistory();

  return (
    <div className="navbar">
      <div className="logo" onClick={() => history.replace("/")}>
        Cognito Hosted-UI
      </div>

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
