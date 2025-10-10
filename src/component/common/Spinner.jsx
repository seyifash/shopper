"use client";
import React from "react";

const Spinner = ({
  size = "md", // sm, md, lg
  color = "yellow", // default theme color
  className = "",
}) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const colors = {
    yellow: "border-yellow-400 border-t-transparent",
    white: "border-white border-t-transparent",
    gray: "border-gray-400 border-t-transparent",
  };

  return (
    <div
      className={`animate-spin rounded-full border-4 ${sizes[size]} ${
        colors[color]
      } ${className}`}
    />
  );
};

export default Spinner;
