import React, {useRef} from "react";

const Input = ({inputId, name, onChange, placeholder,onKeyPress, type, value,label, className, containerClassName, 
                labelClassName, required, disabled, inputmode, pattern,checked, errMsg}) => {
							    
    const inputRef = useRef(null);

    const handleClick = () => {
      if (inputRef && inputRef.current) inputRef.current.focus();
    };

    const onInputFocus = (e) => {
        let inputIdel = document.getElementById(`${e.target.id}`);
    };

    
    return (
        <div className={containerClassName} onClick={()=>handleClick()}>
            {label && label !== "" &&
            <label className={labelClassName} htmlFor={inputId}>
                {label}
                {required &&
                    <span className="requiredStar">*</span>
                }
            </label>
            }

            <input
                ref={inputRef}
                id={inputId}
                type={type}
                pattern={pattern}
                inputMode={inputmode}
                name={name}
                onChange={(e)=>onChange(e)}
                placeholder={placeholder}
                value={value}
                className={className}
                disabled={disabled && disabled == true ? true : false }
                required={required}
                checked={checked}
                onWheel={ event => event.currentTarget.blur() }
                onBlur={e =>onInputFocus(e)}
                autoComplete="off"
                onKeyDown={(e)=>onKeyPress != undefined ? onKeyPress(e) : ""}
            />

            {required && errMsg && errMsg !== "" &&
                <p className="inputErrorMsg">{errMsg}</p>
            }
        </div>           
    )
};

export default Input;
