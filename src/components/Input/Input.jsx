import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * This component represents the main input used for user interaction.
 * Use it for key and highlighted actions in the user interface.
 */
const Input = ({
  label,
  type,
  id,
  name,
  onChange,
  placeholder,
  value,
  disabled,
  isRequeried,
  messageError,
  icon,
  valueState,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [contentMessageError, setContentMessageError] = useState('')
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (!!messageError) {
      setContentMessageError(messageError)
    } else {
      console.log("entro?")
      setContentMessageError('Campo requerido')
    }
  }, [messageError])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyDown = (event) => {
    if ((event.key === "Enter" || event.key === "Tab") && isRequeried && !value) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  const modeValueState = classNames({
    "border-gray": valueState === "None",
    "border-danger": valueState === "Error",
    "border-warning": valueState === "Warning",
    "border-success": valueState === "Success",
    "border-info": valueState === "Information",
  });

  const modeLabel = classNames({
    "text-gray-700": valueState === "None",
    "text-danger": valueState === "Error",
    "text-warning": valueState === "Warning",
    "text-success": valueState === "Success",
    "text-info": valueState === "Information",
  });

  const inputType = type === "password" && !showPassword ? "password" : "text";

  return (
    <div className="w-52 h-14 gap-1 flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm font-medium flex flex-row gap-1 ${modeLabel}`}
        >
          {label} {valueState === "Success" && (<img src="/iconSuccess.svg" />)} {valueState === "Error" && (<img src="/iconError.svg" />)}
        </label>
      )}
      <div className="relative">
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          />
        )}
        <div className="flex flex-col">
          <input
            type={inputType}
            id={id}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            required={isRequeried}
            className={`py-3 px-4 border border-solid rounded-xl w-full ${modeValueState}`}
            onKeyDown={handleKeyDown}
          />
          <p>
            {(showError || messageError) && (<p className="text-danger text-xs">
              {contentMessageError}
            </p>)}
          </p>
        </div>

        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <img
              src={
                !showPassword
                  ? "/iconShowPassword.svg"
                  : "/iconNoShowPassword.svg"
              }
              alt="eye"
              width="20"
              height="20"
            />
          </button>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  /**
   * The label of the input
   */
  label: PropTypes.string,
  /**
   * The type of the input
   */
  type: PropTypes.oneOf(["text", "password", "number", "email", "tel", "url"]),
  /**
   * The id of the input
   */
  id: PropTypes.string,
  /**
   * The name of the input
   */
  name: PropTypes.string,
  /**
   * The onChange function of the input
   */
  onChange: PropTypes.func,
  /**
   * The placeholder of the input
   */
  placeholder: PropTypes.string,
  /**
   * The value of the input
   */
  value: PropTypes.string,
  /**
   * The disabled state of the input
   */
  disabled: PropTypes.bool,
  /**
   * The required state of the input
   */
  isRequeried: PropTypes.bool,
  /**
   * The icon of the input
   */
  icon: PropTypes.string,
  /**
   * The valueState of the input
   */
  valueState: PropTypes.oneOf([
    "None",
    "Error",
    "Warning",
    "Success",
    "Information",
  ]),

  /**
   * The messageError of the input
   */
  messageError: PropTypes.string,
};

Input.defaultProps = {
  label: "",
  type: "text",
  id: "",
  name: "",
  onChange: () => { },
  placeholder: "Escribe",
  value: "",
  disabled: false,
  isRequeried: false,
  icon: "",
  valueState: "None",
  messageError: "",
};

export default Input;
