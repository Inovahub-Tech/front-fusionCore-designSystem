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
        "flex items-center justify-center min-h-full w-1/6": true,
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
        "text-darkgray": true,
    });

    return (
        showAlert && (
            <div className= "rounded-xl overflow-hidden shadow-md flex items-center justify-items-start w-96 h-14" {...props}>
                <div className={alertClass}>
                    <Icon className={iconClass} />
                </div>
                <div className="ml-2 my-2">
                    <div className={titleClass}>{title}</div>
                    <p className={messageClass}>{message}</p>
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
};

export default Alert;