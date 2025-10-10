"use client"
import React from "react";

const Input = ({type = "text",
                value,
                onChange,
                checked,
                placeholder,
                variant = "default",
                className = "",
                ...props}) => {

    const baseStyles = "w-full px-3 py-2 border rounded-md focus:outline-none transition"

    const variants = {
        default: "border-gray-300 focus:ring-2 focus:ring-purple-500",
        error: "border-red-500 focus:ring-2 focus:ring-red-400",
        success: "border-green-500 focus:ring-2 focus:ring-green-400",
        minimal: "border-none bg-transparent focus:ring-0",
        }

    return(
        <input
            type={type}
            placeholder={placeholder}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onChange={(e) => onChange?.(
                type === "number" 
                ? Number(e.target.value)
                : type === "checkbox" ?
                e.target.checked 
                : e.target.value)}
            {...(type === "checkbox" ? {checked} : {value} )}
            {...props}
         />
    )
}
export default Input;