import React from "react";
import "./progressBar.css";

function ProgressBar({ value = 50, max = 100 }) {
  const percent = (parseInt(value) / parseInt(max)) * 100;
  const colorClass = percent >= 50 ? "above" : "under";

  return (
    <div
      className={`progress-bar ${colorClass}`}
      style={{ "--percent": `${percent}%` }}
    />
  );
}

export default ProgressBar;
