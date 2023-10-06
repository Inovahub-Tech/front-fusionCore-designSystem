import PropTypes from "prop-types";

/**
 * Body Text Component
 *
 * This component is used to display text in the body of the user interface.
 * It provides a readable text style and formatting suitable for long paragraphs or sections of content.
 * It also provides a set of default props that can be used to customize the body text component.
 * */

const TextBody = ({ children, weight, theme, size, alignment }) => {
  const weightClass = {
    regular: "font-regular",
    bold: "font-bold",
  }[weight];

  const alignClass = {
    start: "text-left",
    center: "text-center",
    end: "text-right",
  }[alignment];

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
    chineseSilver: "text-chineseSilver",
  }[theme];

  return (
    <p className={`${sizeClass} ${weightClass} ${themeClass} ${alignClass}`}>
      {children}
    </p>
  );
};

TextBody.propTypes = {
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
  alignment: PropTypes.oneOf(["start", "center", "end"]),
};

TextBody.defaultProps = {
  weight: "bold",
  theme: "primary",
  size: "head",
  alignment: "start",
};

export default TextBody;
