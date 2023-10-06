import PropTypes from "prop-types";
import classNames from "classnames";

import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

import {
  ExclamationCircleIcon as ExclamationCircleIconSolid,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";


function Select({
  options,
  label,
  id,
  name,
  valueState,
  disabled,
  value,
  defaultValue,
  setFormValue,
  placeholderText,
  loading,
  ...props
}) {

  const modeLabel = classNames({
    "text-gray-700": valueState === "None",
    "text-danger": valueState === "Error",
    "text-warning": valueState === "Warning",
    "text-success": valueState === "Success",
    "text-info": valueState === "Information",
  });

  const modeValueState = classNames({
    "border-lightgray": valueState === "None",
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
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`text-sm font-medium flex flex-row items-center gap-1 ${modeLabel}`}
        >
          {label} {valueState !== "None" && <Icon className="w-4" />}
        </label>
      )}
      <select
        disabled={disabled}
        placeholder={placeholderText}
        name={name}
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={
          (e) => {
            const optionSelect = options.find((option) => option.value === e.target.value);
            setFormValue && setFormValue((values) => ({ ...values, [name]: optionSelect.data || "" }));
          }
        }
        className={`inline-flex items-center justify-between w-full  px-4 py-3 text-sm font-medium bg-white border  rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 ${modeValueState} ${disabled ? "bg-antiflashwhite border-lightgray text-[#CCCCCC] cursor-not-allowed" : "cursor-pointer"}`}
        {...props}
      >
        <option disabled value="" className="items-center flex">
          {loading ? "Cargando..." : placeholderText}
        </option>
        {options.map(
          (option, index) => {
            console.log("option", option)
            return (
              <option
                key={index}
                value={option.value}
              >
                {option.label || option.value}
              </option>
            );
          }
        )}
      </select>
    </div>
  );
}

Select.propTypes = {

  /**
   * The label for the select.
   * 
   * @string  Label
   *
   */
  label: PropTypes.string,

  /**
   * The id for the select.
   * 
   * @string  Id
   *
   */
  id: PropTypes.string,

  /**
   * The name for the select.
   * 
   * @string  Name
   *
   */
  name: PropTypes.string,

  /**
   * The valueState for the select.
   * 
   * @string  ValueState
   *
   */
  valueState: PropTypes.oneOf(["None", "Error", "Warning", "Success", "Information"]),
  /**
   * The disabled for the select.
   * 
   * @boolean  Disabled
   *
   */
  disabled: PropTypes.bool,
  /**
   * The value for the select.
   * 
   * @string  Value
   *
   */
  value: PropTypes.string,
  /**
   * The defaultValue for the select.
   * 
   * @string  DefaultValue
   *
   */
  defaultValue: PropTypes.string,
  /**
   * The setFormValue for the select.
   * 
   * @function  SetFormValue
   *
   */
  setFormValue: PropTypes.func,
  /**
   * The placeholderText for the select.
   * 
   * @string  PlaceholderText
   *
   */
  placeholderText: PropTypes.string,
  /**
   * The loading for the select.
   * 
   * @boolean  Loading
   *
   */
  loading: PropTypes.bool,
  /**
   * The options for the select.
   * 
   * @array  Options
   *
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      data: PropTypes.any,
    })
  ).isRequired,

};

Select.defaultProps = {

  label: "",
  id: "",
  name: "",
  width: "",
  valueState: "None",
  disabled: false,
  value: "",
  defaultValue: "",
  placeholderText: "",
  loading: false,
  options: [],

};

export default Select;
