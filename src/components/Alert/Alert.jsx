import classNames from "classnames";
import PropTypes from "prop-types";
import { useState } from "react";
import { ExclamationCircleIcon, ExclamationTriangleIcon, CheckCircleIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";




const Alert = ({ title, message, onClose, type, ...props }) => {
    const [showAlert, setShowAlert] = useState(true);

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
        "h-full": true,
        "bg-info": type === "information",
        "bg-warning": type === "caution",
        "bg-success": type === "success",
        "bg-danger": type === "error"
    });

    let Icon;
    switch (type) {
        case "information":
            Icon = ExclamationCircleIcon;
            break;
        case "caution":
            Icon = ExclamationTriangleIcon;
            break;
        case "success":
            Icon = CheckCircleIcon;
            break;
        case "error":
            Icon = XCircleIcon;
            break;
        default:
            Icon = ExclamationCircleIcon;
    }

    const titleClass = classNames({
        "font-medium": true,
    });

    const messageClass = classNames({
        "mt-2 text-darkgray": true,
    });

    return (
        showAlert && (
            <div className= "p-4 rounded-xl shadow-md flex items-center w-96 h-14" {...props}>
                <div className={alertClass}>
                    <Icon className={iconClass} />
                </div>
                <div className="ml-4">
                    <div className={titleClass}>{title}</div>
                    <p className={messageClass}>{message}</p>
                </div>
                <div className="alert__close" onClick={handleClose}>
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
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
};

export default Alert;