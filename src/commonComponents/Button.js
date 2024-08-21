import React, { useRef } from "react";

const Button = ({ buttonId, containerClassName, buttonClassName, onSubmit, title, disabled, value, name, icon, LoaderMessage, toolTip, type }) => {

    const buttonRef = useRef(null);
  
    const handleClick = () => {
      if (buttonRef && buttonRef.current) buttonRef.current.focus();
    };

    return(
        <div id={`${buttonId}_main_con`} className={containerClassName} onClick={()=>handleClick()}>
            {LoaderMessage && LoaderMessage !== "" &&
            <div id={`${buttonId}_loader`} className="loaderContainer">
                <img src={""} alt="" />
                <span>{LoaderMessage}</span>
            </div>
            }

            <button 
                ref={buttonRef}
                id={buttonId}
                className={buttonClassName}
                disabled={disabled}
                onClick={(e)=>onSubmit ? onSubmit(e) : ""}
                value={value}
                name={name}
                title={toolTip}
                type={type}
            >
                {icon ? icon : ""}
                {title}
            </button>
        </div>
    )
};

export default Button;