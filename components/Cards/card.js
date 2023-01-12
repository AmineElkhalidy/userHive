import React from "react";

const Card = ({ children, styles }) => {
  return (
    <div className={`p-4 bg-[#2c2c30] rounded-lg ${styles}`}>{children}</div>
  );
};

export default Card;
