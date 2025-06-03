import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="logo">
        <FaLinkedin size={32} color="#0A66C2" />
        <h1>LinkedIn Dashboard</h1>
      </div>
      <div className="last-updated">
        Last updated: {new Date().toLocaleDateString()}
      </div>
    </header>
  );
};

export default Header;
