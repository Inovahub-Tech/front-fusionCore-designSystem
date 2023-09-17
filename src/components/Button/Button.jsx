import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * This component represents the main button used for user interaction.
 * Use it for key and highlighted actions in the user interface.
 */
export const Button = ({ buttonStyle, backgroundColor, color, disabled, icon, size, label, ...props }) => {

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

  const modeButtonStyle = classNames({
    "font-bold py-3 px-4 rounded-2xl inline-flex justify-center items-center": buttonStyle === 'filled',
    'font-bold py-3 px-4 rounded-2xl inline-flex justify-center items-center border-primary border-solid border bg-inherit text-primary hover:bg-tertiary hover:text-white': buttonStyle === 'outlined',
    'font-bold py-3 px-4 rounded-2xl bg-primary text-white inline-flex justify-center items-center': buttonStyle === 'filled' && ((!backgroundColor || backgroundColor === null) || (!color || color === null)),
    'font-bold py-3 px-4 rounded-2xl text-primary border-primary border-solid border bg-inherit inline-flex justify-center items-center hover:bg-tertiary hover:text-white': buttonStyle === 'outlined' && ((!backgroundColor || backgroundColor === null) || (!color || color === null)),
  });

  const modeDisabled = classNames({
    'bg-secondary cursor-not-allowed': disabled,
  });

  const modeIcon = classNames({
    'w-3.5 h-3.5': icon && modeSize === 'text-base',
    'w-6 h-6': icon && modeSize === 'text-lg',
    'w-1 h-1': icon && modeSize === 'text-sm',
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
};
