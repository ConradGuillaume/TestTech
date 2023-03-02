import React from "react";

const ProgressBar = ({ title, progress, onClick, isSelected, close }) => {
  const getColorForPercentage = (percentage) => {
    const colors = [
      { from: 0, to: 25, color: "#7160e8" },
      { from: 25, to: 50, color: "#60ade8" },
      { from: 50, to: 75, color: "#60e8b6" },
      { from: 75, to: 100, color: "#30db63" },
    ];
    const color = colors.find(
      (c) => percentage >= c.from && percentage <= c.to
    );
    return color ? color.color : null;
  };

  const barColor = getColorForPercentage(progress);

  return (
    <div
      className={`bar-container ${isSelected ? "selected" : ""}`} // add shadow selector
    >
      <p className="bar-title">{title}</p>
      <div className="bar-progress" onClick={onClick}>
        <p className="bar-lvl">{progress} %</p>
        <div className="bar">
          <div
            className="bar-fill"
            style={{ backgroundColor: barColor, width: `${progress}%` }}
          ></div>
        </div>
      </div>
      {isSelected && (
        <div className="close" onClick={close}>
          x
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
