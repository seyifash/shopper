import React from "react";

const Button = ({isType = false, classname, label, ...props}) => {

    return(
        <button type={isType ? "submit" : "button"} className={classname}>
            {label}
        </button>
    )
}
export default Button;