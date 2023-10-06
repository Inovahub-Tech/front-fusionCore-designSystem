import PropTypes from "prop-types";

/**
 * Mono Text Component
 *
 * This component is used to render text in a mono font style.
 * It provides a uniform text format in which each character occupies the same width,
 * which is useful for displaying code, commands or formatted information.
 * It also provides a set of default props that can be used to customize the mono text component.
 * */

const TextMono = ({ children, weight, theme, size }) => {
  const weightClass = {
    regular: "font-regular",
    bold: "font-bold",
  }[weight];

  const sizeClass = {
    s: "text-xs",
    m: "text-sm",
    l: "text-base",
  }[size];

  const themeClass = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
    danger: "text-danger",
    warning: "text-warning",
    success: "text-success",
    black: "text-black",
    gray: "text-gray",
  }[theme];

  return (
    <p className={`${sizeClass} ${weightClass} ${themeClass} text-`}>
      {children}
    </p>
  );
};

TextMono.propTypes = {
  children: PropTypes.node.isRequired,
  weight: PropTypes.oneOf(["regular", "bold"]),
  theme: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "danger",
    "warning",
    "success",
    "black",
    "gray",
  ]),
  size: PropTypes.oneOf(["s", "m", "l"]),
};

TextMono.defaultProps = {
  weight: "bold",
  theme: "primary",
  size: "head",
};

export default TextMono;
