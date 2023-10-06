import classNames from "classnames";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import TextBody from "../TextBody";

import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

import {
  ExclamationCircleIcon as ExclamationCircleIconSolid,
  CheckCircleIcon
} from "@heroicons/react/24/solid";

const TextField = ({
  label,
  placeholder,
  id,
  valueState,
  maxLength,
  onChange,
  name,
  disabled,
  isRequeried,
  messageError,
  ...props
}) => {
  const [contentMessageError, setContentMessageError] = useState("");
  const [showError, setShowError] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!messageError) {
      setContentMessageError("Campo requerido");
    } else {
      setContentMessageError(messageError);
    }
  }, [messageError]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length <= maxLength) {
      setInputValue(inputValue);
      onChange(inputValue);
    }
  };

  const handleKeyDown = (event) => {
    if (
      (event.key === "Enter" || event.key === "Tab") &&
      isRequeried &&
      !event.target.value
    ) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  const charCount = inputValue.length;

  const modeLabel = classNames({
    "text-gray-700": valueState === "None",
    "text-danger": valueState === "Error",
    "text-warning": valueState === "Warning",
    "text-success": valueState === "Success",
    "text-info": valueState === "Information",
  });

  const modeValueState = classNames({
    "border-gray": valueState === "None",
    "border-danger": valueState === "Error",
    "border-warning": valueState === "Warning",
    "border-success": valueState === "Success",
    "border-info": valueState === "Information",
  });

  const iconMap = {
    Information: ExclamationCircleIcon,
    Caution: ExclamationTriangleIcon,
    Success: CheckCircleIcon,
    Error: ExclamationCircleIconSolid,
  };

  const Icon = iconMap[valueState];

  return (
    <div className="flex flex-col gap-0.5">
      {label && (
        <label
          htmlFor={id}
          className={` text-sm font-medium flex flex-row gap-1 ${modeLabel}`}
        >
          {label} {valueState !== "None" && <Icon className="w-4" />}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={`py-3.5 h-14 px-4 border text-sm border-solid rounded-xl w-full ${modeValueState}`}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        required={isRequeried}
        disabled={disabled}
        maxLength={maxLength}
        {...props}
      />

      <div className="flex justify-between">
        {(showError || messageError) && (
          <TextBody weight="regular" size="s" theme="danger">
            {contentMessageError}
          </TextBody>
        )}
        <TextBody
          weight="regular"
          size="s"
          theme="chineseSilver"
          alignment="end"
        >
          {charCount}/{maxLength}
        </TextBody>
      </div>
    </div>
  );
};

TextField.propTypes = {
  /**
   * Texto que se muestra en el label
   * */
  label: PropTypes.string,
  /**
   * Texto que se muestra en el placeholder
   * */
  placeholder: PropTypes.string,
  /**
   * Id del input
   * */
  id: PropTypes.string,
  /**
   * Estado del input
   * */
  valueState: PropTypes.oneOf([
    "None",
    "Error",
    "Warning",
    "Success",
    "Information",
  ]),
  /**
   * Longitud máxima del input
   * */
  maxLength: PropTypes.number,
  /**
   * Función que se ejecuta al cambiar el valor del input
   * */
  onChange: PropTypes.func,
  /**
   * Nombre del input
   * */
  name: PropTypes.string,
  /**
   * Estado del input
   * */
  disabled: PropTypes.bool,
  /**
   * Estado del input
   * */
  isRequeried: PropTypes.bool,
  /**
   * Mensaje de error
   * */
  messageError: PropTypes.string,
};

TextField.defaultProps = {
  label: "",
  placeholder: "",
  id: "",
  valueState: "None",
  maxLength: 100,
  onChange: () => { },
  name: "",
  disabled: false,
  isRequeried: false,
  messageError: "",
};

export default TextField;
