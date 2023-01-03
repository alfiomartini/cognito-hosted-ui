import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <div className="logo">Cognito Hosted-UI</div>

      {user && (
        <Link to="/signIn" className="link">
          Sign In
        </Link>
      )}
    </div>
  );
};
