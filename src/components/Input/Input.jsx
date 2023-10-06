import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  EyeSlashIcon,
  EyeIcon
} from "@heroicons/react/24/outline";

import {
  ExclamationCircleIcon as ExclamationCircleIconSolid,
  CheckCircleIcon
} from "@heroicons/react/24/solid";

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
  disabled,
  isRequeried,
  messageError,
  icon,
  valueState,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [contentMessageError, setContentMessageError] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (!messageError) {
      setContentMessageError("Campo requerido");
    } else {
      setContentMessageError(messageError);
    }
  }, [messageError]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

  const iconMap = {
    Information: ExclamationCircleIcon,
    Caution: ExclamationTriangleIcon,
    Success: CheckCircleIcon,
    Error: ExclamationCircleIconSolid,
  };

  const Icon = iconMap[valueState];

  return (
    <div className="w-52 h-14 gap-1 flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className={`text-sm font-medium flex flex-row gap-1 ${modeLabel}`}
        >
          {label} {valueState !== "None" && <Icon className="w-4" />}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div
            className={"absolute right-4 top-1/2 transform -translate-y-1/2 w-6"}
          >
            {icon}
          </div>
        )}

        <div className="flex flex-col">
          <input
            type={inputType}
            id={id}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            required={isRequeried}
            className={`py-3 px-4 border border-solid rounded-xl w-full ${modeValueState}`}
            onKeyDown={handleKeyDown}
          />
          <p>
            {(showError || messageError) && (
              <p className="text-danger text-xs">{contentMessageError}</p>
            )}
          </p>
        </div>

        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            {
              showPassword ? (
                <EyeSlashIcon className="w-5" />
              ) : (
                <EyeIcon className="w-5" />
              )
            }
          </button>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  /**
   * The label of the input
   * @default ""
   */
  label: PropTypes.string,
  /**
   * The type of the input
   * @default text
   */
  type: PropTypes.oneOf(["text", "password", "number", "email", "tel", "url"]),
  /**
   * The id of the input
   * @default ""
   */
  id: PropTypes.string,
  /**
   * The name of the input
   * @default ""
   */
  name: PropTypes.string,
  /**
   * The onChange function of the input
   * @default () => {}
   */
  onChange: PropTypes.func,
  /**
   * The placeholder of the input
   * @default "Escribe"
   */
  placeholder: PropTypes.string,
  /**
   * The disabled state of the input
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * The required state of the input
   * @default false
   */
  isRequeried: PropTypes.bool,
  /**
   * The icon of the input
   *  @default null
   */
  icon: PropTypes.node,
  /**
   * The valueState of the input
   * @default None
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
   * @default ""
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
  disabled: false,
  isRequeried: false,
  icon: null,
  valueState: "None",
  messageError: "",
};

export default Input;
