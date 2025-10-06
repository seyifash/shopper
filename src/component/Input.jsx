"use client"
import React from "react";

const Input = ({type, classmate, functions, ...props}) => {

    return(
        <input
            type={type}
            {...props}
            className={classmate}
            onChange={() => functions}

         />
    )
}
export default Input;