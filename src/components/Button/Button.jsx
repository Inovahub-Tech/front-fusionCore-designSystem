import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * This component represents the main button used for user interaction.
 * Use it for key and highlighted actions in the user interface.
 */
export const Button = ({
  onlyIcon,
  backgroundColor,
  color,
  disabled,
  borderColor,
  icon,
  size,
  label,
  className,
  ...props
}) => {
  const modeBackgroundColor = classNames({
    "bg-primary": backgroundColor === "primary",
    "bg-secondary": backgroundColor === "secondary",
    "bg-tertiary": backgroundColor === "tertiary",
    "bg-white": backgroundColor === "white",
    "bg-danger": backgroundColor === "danger",
    "bg-warning": backgroundColor === "warning",
  });

  const modeBorderColor = classNames({
    "border-primary": borderColor === "primary",
    "border-secondary": borderColor === "secondary",
    "border-tertiary": borderColor === "tertiary",
    "border-gray": borderColor === "gray",
  });

  const modeColor = classNames({
    "text-primary": color === "primary",
    "text-secondary": color === "secondary",
    "text-white": color === "white",
    "text-gray": color === "gray",
  });

  const modeSize = classNames({
    "text-sm rounded-2xl h-10": size === "small",
    "text-base rounded-3xl h-12": size === "medium",
    "text-lg rounded-3xl": size === "large",
  });

  const modeDisabled = classNames({
    "bg-secondary cursor-not-allowed": disabled === true,
  });

  const modeIcon = classNames({
    "w-4 h-4": icon && size === "small",
    "w-6 h-6": icon && size === "medium",
    "w-7 h-7": icon && size === "large",
  });

  return (
    <button
      type="button"
      className={` w-full flex items-center round ${modeSize} ${modeBorderColor} ${modeBackgroundColor} ${modeColor} ${modeDisabled} ${className} ${icon && "gap-2"
        } ${onlyIcon ? "p-2 rounded-full" : "px-4 py-2"} ${modeBorderColor && "border"}`}
      disabled={disabled}
      {...props}
    >
      {label}
      {icon && <img src={icon} alt={label} className={modeIcon} />}
    </button>
  );
};

Button.propTypes = {
  /**
   * What background color to use
   * @default null
   * */
  backgroundColor: PropTypes.oneOf(["primary", "secondary", "tertiary", "white"]),
  /**
   * What color to use
   * @default null
   * */
  color: PropTypes.oneOf(["primary", "secondary", "white", "gray"]),
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Button size
   * @default medium
   * */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button style
   * @default false
   * */
  onlyIcon: PropTypes.bool,
  /**
   * Button icon
   * @default null
   * */
  icon: PropTypes.node,
  /**
   * Button disabled
   * @default false
   * */
  disabled: PropTypes.bool,
  /**
   * Button click handler
   * @default undefined
   * */
  onClick: PropTypes.func.isRequired,
  /**
   * Border color
   * @default null
   * */
  borderColor: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  /**
   * Class name
   * @default null
   * */
  className: PropTypes.string,
};

Button.defaultProps = {
  onlyIcon: false,
  backgroundColor: null,
  color: null,
  primary: false,
  size: "medium",
  icon: null,
  disabled: false,
  onClick: undefined,
  borderColor: null,
  className: null,
};

export default Button;