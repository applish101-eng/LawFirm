import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  width = "fit",
  iconRight,
  iconLeft,
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-3 font-medium rounded transition-all duration-300 cursor-pointer whitespace-nowrap font-secondary ";

  const variants = {
    primary: "bg-primary-500 text-black hover:bg-primary-600 ",
    secondary:
      "bg-white/10 backdrop-blur border-2 border-white/20 text-white shadow-md hover:bg-neutral-900 hover:shadow-lg",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    ghost: "bg-transparent text-black hover:text-neutral-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizes = {
    sm: "text-sm px-3 py-2",
    md: "text-base px-4 py-2",
    lg: "text-lg sm:text-2xl font-extrabold px-5 py-3",
    xl: "text-lg sm:text-2xl font-extrabold px-5 py-5",
  };

  const widths = {
    auto: "w-auto",
    fit: "w-fit",
    sm: "w-[160px]",
    md: "w-[200px]",
    lg: "w-[240px]",
    full: "w-full",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${widths[width]} ${className}`}
      {...props}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}

      <span>{children}</span>

      {iconRight && (
        <span className="bg-black text-white p-2 rounded-sm flex items-center justify-center">
          {iconRight}
        </span>
      )}
    </button>
  );
};

export default Button;
