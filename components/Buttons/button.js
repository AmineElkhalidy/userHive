import React from "react";

const Button = ({ children, styles }) => {
  return <button className={`text-white ${styles}`}>{children}</button>;
};

export default Button;
