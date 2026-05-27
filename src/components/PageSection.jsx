import React from "react";

const variants = {
  hero: "",
  default: "py-20",
  large: "py-24",
  cta: "py-20 bg-black",
};

const PageSection = ({ variant = "default", className = "", children, ...props }) => {
  const baseClasses = variants[variant] || variants.default;
  return (
    <section className={`w-full ${baseClasses} ${className}`} {...props}>
      {children}
    </section>
  );
};

export default PageSection;
