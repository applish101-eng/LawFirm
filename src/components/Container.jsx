import React from "react";

const Container = ({ className = "", children, ...props }) => {
  return (
    <div className={`max-w-8xl px-6 mx-auto mt-10  ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
