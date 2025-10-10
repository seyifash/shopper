"use client";
import React from "react";
import { Loader2 } from "lucide-react"; // optional spinner icon

const Button = ({
        label,
        variant = "primary",
        size = "md",
        isType = false,
        loading = false,
        disabled = false,
        icon: Icon,
        className = "",
        ...props
        }) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-yellow-300 text-white whitespace-nowrap hover:bg-purple-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={isType ? "submit" : "button"}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading ? (
        <Loader2 className="animate-spin w-5 h-5 mr-2" />
      ) : Icon ? (
        <Icon className="w-5 h-5 mr-2" />
      ) : null}

      {label}
    </button>
  );
};

export default Button;
