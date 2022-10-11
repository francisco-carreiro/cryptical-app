import React from "react";

const Selector = ({ children, selected, onClick }) => {
  return (
    <span onClick={onClick} className="selectButton">
      {children}
    </span>
  );
};

export default Selector;
