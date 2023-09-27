import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * This component represents the main button used for user interaction.
 * Use it for key and highlighted actions in the user interface.
 */
export const Button = ({
  buttonStyle,
  backgroundColor,
  color,
  disabled,
  borderColor,
  icon,
  size,
  label,
  ...props
}) => {

  const modeBackgroundColor = classNames({
    "bg-primary": backgroundColor === "primary",
    "bg-secondary": backgroundColor === "secondary",
    "bg-tertiary": backgroundColor === "tertiary",
    "bg-white": backgroundColor === "white",
  });

  const modeBorderColor = classNames({
    "border-primary": borderColor === "primary",
    "border-secondary": borderColor === "secondary",
    "border-tertiary": borderColor === "tertiary",
  });

  const modeColor = classNames({
    "text-primary": color === "primary",
    "text-secondary": color === "secondary",
    "text-white": color === "white",
  });

  const modeSize = classNames({
    "text-xs rounded-xl": size === "small",
    "text-sm rounded-2xl": size === "medium",
    "text-lg rounded-3xl": size === "large",
  });

  const modeDisabled = classNames({
    "bg-secondary cursor-not-allowed": disabled,
  });

  const modeIcon = classNames({
    "w-4 h-4": icon && size === "small",
    "w-6 h-6": icon && size === "medium",
    "w-7 h-7": icon && size === "large",
  });


  return (
    <button
      type="button"
      className={` w-full flex items-center  ${modeSize} ${modeBorderColor} ${modeBackgroundColor} ${modeColor} ${modeDisabled} ${icon && "gap-2"
        } ${buttonStyle === "onlyIcon" ? "p-2 rounded-full" : "px-4 py-2"} ${modeBorderColor && "border"}`}
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
  backgroundColor: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  /**
   * What color to use
   * @default null
   * */
  color: PropTypes.oneOf(["primary", "secondary", "white"]),
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
   * @default filled
   * */
  buttonStyle: PropTypes.oneOf(["normal", "onlyIcon"]),
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
};

Button.defaultProps = {
  buttonStyle: "filled",
  backgroundColor: null,
  color: null,
  primary: false,
  size: "medium",
  icon: null,
  disabled: false,
  onClick: undefined,
  borderColor: null,
};
