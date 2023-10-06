import classNames from "classnames";
import PropTypes from "prop-types";
import TextBody from "../TextBody";
import { useState, useEffect } from "react";
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


/**
 * This component represents the main alert used for user interaction.
 * Use it for key and highlighted actions in the user interface.
 */

const Alert = ({
  title,
  message,
  onClose,
  type,
  autoHide = false,
  hideDuration = 3000,
  ...props
}) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    let timer;
    if (autoHide) {
      timer = setTimeout(() => {
        setShowAlert(false);
        onClose();
      }, hideDuration);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [autoHide, hideDuration, onClose]);

  const handleClose = () => {
    setShowAlert(false);
    onClose();
  };

  const iconClass = classNames({
    "h-8 w-8": true,
    "text-white": true,
    "h-full": true,
  });

  const alertClass = classNames({
    "flex items-center justify-center min-h-full w-1/6": true,
    "bg-info": type === "information",
    "bg-warning": type === "caution",
    "bg-success": type === "success",
    "bg-danger": type === "error",
  });

  const iconMap = {
    information: ExclamationCircleIcon,
    caution: ExclamationTriangleIcon,
    success: CheckCircleIcon,
    error: XCircleIcon,
  };

  const Icon = iconMap[type] || ExclamationCircleIcon;

  return (
    showAlert && (
      <div
        className="fixed top-0 right-0 z-50 rounded-xl overflow-hidden shadow-md flex items-center justify-items-start w-96 h-14"
        {...props}
      >
        <div className={alertClass}>
          <Icon className={iconClass} />
        </div>
        <div className="ml-2 my-2">
          <TextBody size="l" alignment="start" weight="bold" theme="black">
            {title}
          </TextBody>
          <TextBody size="m" alignment="start" weight="regular" theme="gray">
            {message}
          </TextBody>
        </div>
        <div className="ml-auto mr-5" onClick={handleClose}>
          <XMarkIcon className="h-6 w-6 text-gray" />
        </div>
      </div>
    )
  );
};

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["information", "caution", "success", "error"]),
  autoHide: PropTypes.bool,
  hideDuration: PropTypes.number,
};

export default Alert;
