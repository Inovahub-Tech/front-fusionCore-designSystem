import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Select({
  options,
  onSelect,
  label,
  id,
  valueState,
  disabled,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState([
    {
      label: "",
      value: "",
    },
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

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

  const modeDisabled = classNames({
    "bg-lightgray text-[#CCCCCC] cursor-not-allowed": disabled,
  });

  console.log("selectedOption", selectedOption);

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm font-medium flex flex-row gap-1 ${modeLabel}`}
        >
          {label} {valueState === "Success" && <img src="/iconSuccess.svg" />}{" "}
          {valueState === "Error" && <img src="/iconError.svg" />}
        </label>
      )}
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={toggleDropdown}
            type="button"
            className={`inline-flex items-center justify-between w-full px-4 py-3 text-sm font-medium bg-white border rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 ${modeValueState} ${selectedOption.label ? "text-gray-700" : "text-gray"} ${modeDisabled}`}
            id="options-menu"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-labelledby="options-menu"
            disabled={disabled}
            {...props}
          >
            {selectedOption?.label || "Selecciona una opción"}
            <img
              src="/iconArrowUp.svg"
              className={`ml-2 transform ${!isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {isOpen && (
          <ul className="origin-top-right absolute right-0 mt-2 w-56 rounded-md w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-indigo-100"
                role="menuitem"
                {...props}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  onSelect: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  valueState: PropTypes.oneOf([
    "None",
    "Error",
    "Warning",
    "Success",
    "Information",
  ]),
  disabled: PropTypes.bool,
};

export default Select;
