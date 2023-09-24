import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * This component represents the main button used for user interaction.
 * Use it for key and highlighted actions in the user interface.
 */
export const Button = ({ buttonStyle, backgroundColor, color, disabled, icon, size, label, onlyIcon, ...props }) => {

  const modeBackgroundColor = classNames({
    'bg-primary': backgroundColor === 'primary',
    'bg-secondary': backgroundColor === 'secondary',
    'bg-tertiary': backgroundColor === 'tertiary',
  });

  const modeColor = classNames({
    'text-primary': color === 'primary',
    'text-secondary': color === 'secondary',
    'text-white': color === 'white',
  });

  const modeSize = classNames({
    'text-sm': size === 'small',
    'text-base': size === 'medium',
    'text-lg': size === 'large',
  });

  const modeButtonStyle = classNames(
    "font-bold inline-flex justify-center items-center",
    {
      "p-2 rounded-full": buttonStyle === 'filled' && onlyIcon,
      "py-3 px-4 rounded-2xl": buttonStyle === 'filled' && !onlyIcon,
    },
    {
      "bg-primary text-white rounded-2xl": buttonStyle === 'filled' && ((!backgroundColor || backgroundColor === null) || (!color || color === null)),
      "border-primary border-solid border bg-inherit text-primary hover:bg-tertiary hover:text-white rounded-2xl  ": buttonStyle === 'outlined' && ((!backgroundColor || backgroundColor === null) || (!color || color === null)),
    }
  );


  const modeDisabled = classNames({
    'bg-secondary cursor-not-allowed': disabled,
  });

  const modeIcon = classNames({
    'w-3.5 h-3.5': icon && size === 'small',
    'w-6 h-6': icon && size === 'medium',
    'w-1 h-1': icon && size === 'large',
  });

  return (
    <button
      type='button'
      className={` ${modeSize} ${modeButtonStyle} ${modeBackgroundColor} ${modeColor} ${modeDisabled} ${icon && 'gap-2'}`}
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
  backgroundColor: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * What color to use
   * @default null
   * */
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Button size
   * @default medium
   * */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button style
   * @default filled
   * */
  buttonStyle: PropTypes.oneOf(['filled', 'outlined']),
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
  onClick: PropTypes.func,

  /**
   *  Button only icon
   * @default false
   *  
   *  */
  onlyIcon: PropTypes.bool,
};

Button.defaultProps = {

  buttonStyle: 'filled',
  backgroundColor: null,
  color: null,
  primary: false,
  size: 'medium',
  icon: null,
  disabled: false,
  onClick: undefined,
  onlyIcon: false,
};
