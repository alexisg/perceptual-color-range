import React from "react";
import isContrastChecker from "is-contrast-checker";

const colors = {
  red: "#f00",
  green: "#008000",
  white: "#fff"
};

const result = isContrastChecker(colors);

function IsContrast() {
  return (
    <div>
      {result.map((color, i) => (
        <p>{color.combinations.hex}</p>
      ))}
    </div>
  );
}

export default IsContrast;
