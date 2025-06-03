import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const MetricCard = ({ title, value, change, icon }) => {
  return (
    <div className="metric-card">
      <div className="metric-icon">{icon}</div>
      <div className="metric-content">
        <h3>{title}</h3>
        <div className="metric-value">
          <span>{value}</span>
          {change && (
            <span className={`change ${change >= 0 ? "positive" : "negative"}`}>
              {change >= 0 ? <FaArrowUp /> : <FaArrowDown />}
              {Math.abs(change)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
