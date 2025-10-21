"use client";
import React from "react";
import clsx from "clsx";

const Skeleton = ({ width = "100%", height = "1rem", rounded = "md", className = "" }) => {
  return (
    <div
      className={clsx(
        "animate-pulse bg-gray-100 dark:bg-[#e0dfe8]",
        {
          "rounded-sm": rounded === "sm",
          "rounded-md": rounded === "md",
          "rounded-lg": rounded === "lg",
          "rounded-full": rounded === "full",
        },
        className
      )}
      style={{ width, height }}
    ></div>
  );
};

export default Skeleton;
