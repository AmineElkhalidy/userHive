import React from "react";

const Button = ({ children, styles, href }) => {
  return (
    <a href={href} className={`text-white ${styles} cursor-pointer`}>
      {children}
    </a>
  );
};

export default Button;
