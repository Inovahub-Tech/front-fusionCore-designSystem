import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ToggleSwitch = ({ label, initialStatus, onToggle }) => {
  
  const [isEnabled, setIsEnabled] = useState(initialStatus);

  const toggleHandler = () => {
    const newStatus = !isEnabled;
    setIsEnabled(newStatus);
    onToggle && onToggle(newStatus);
  };

 
  const labelStyle = classNames("ml-3 text-gray-700 font-medium");

  return (
    <label class="relative inline-flex items-center mb-4 cursor-pointer" >
        <input type="checkbox" class="sr-only peer" checked={isEnabled} />
        <div onClick={toggleHandler} class="w-11 h-6 bg-primary rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
    </label>
  );
};

ToggleSwitch.propTypes = {
  /**
   * Label for the toggle switch
   */
  label: PropTypes.string,
  
  /**
   * Initial toggle status
   */
  initialStatus: PropTypes.bool,

  /**
   * Function to call when the toggle status changes
   */
  onToggle: PropTypes.func,
};

ToggleSwitch.defaultProps = {
  label: "Toggle",
  initialStatus: true,
  onToggle: null,
};

export default ToggleSwitch;
