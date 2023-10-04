import PropTypes from "prop-types";

const Headline = ({ children, weight, className, theme, variant }) => {
  const weightClass = {
    regular: "font-regular",
    medium: "font-medium",
    bold: "font-bold",
  }[weight];

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

  return variant === "head" ? (
    <h3 className={` text-2xl ${weightClass} ${themeClass} ${className}`}>
      {children}
    </h3>
  ) : (
    <h4 className={` text-lg ${weightClass} ${themeClass} ${className}`}>
      {children}
    </h4>
  );
};

Headline.propTypes = {
  children: PropTypes.node.isRequired,
  weight: PropTypes.oneOf(["regular", "medium", "bold"]).isRequired,
  theme: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "danger",
    "warning",
    "success",
    "black",
    "gray",
  ]).isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["head", "subhead"]).isRequired,
};

Headline.defaultProps = {
  weight: "bold",
  theme: "primary",
  className: "",
  variant: "head",
};

export default Headline;
