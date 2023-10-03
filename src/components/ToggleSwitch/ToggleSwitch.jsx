import { useState } from 'react';
import PropTypes from 'prop-types';

export const ToggleSwitch = ({ label, initialStatus, onToggle }) => {

  const [isEnabled, setIsEnabled] = useState(initialStatus);
  const [isChecked, setIsChecked] = useState(initialStatus);
  console.log(isChecked)

  const toggleHandler = () => {
    const newStatus = !isEnabled;
    setIsEnabled(newStatus);
    onToggle && onToggle(newStatus);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer" >
      <input type="checkbox" onChange={(event) => setIsChecked(event.target.checked)} className="sr-only peer" checked={isEnabled} />
      <div onClick={toggleHandler} className="w-11 h-6 bg-gray rounded-full peer-checked:after:translate-x-full after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      {
        label && <span className="ml-3 text-sm font-medium text-gray peer-checked:text-primary dark:text-gray-300">{label}</span>
      }
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
  // label: "Toggle",
  initialStatus: true,
  onToggle: null,
};

export default ToggleSwitch;
