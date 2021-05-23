import React from "react";

const Button = ({ message, buttonColour }) => {
  return (
    <button className={`btn bd-highlight btn-${buttonColour}`} type="submit">
      {message}
    </button>
  );
};

export default Button;
