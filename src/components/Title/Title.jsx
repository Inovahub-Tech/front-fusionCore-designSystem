import PropTypes from "prop-types";

/**
 * Title Component
 *
 * This component is used to display titles or headings in the user interface.
 * It provides distinctive styling and customization options for different levels of headings.
 * It also provides a set of default props that can be used to customize the title component.
 * */

const Title = ({ children, theme, size }) => {
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

  return size === "l" ? (
    <h1 className={` text-5xl ${themeClass} font-bold`}>{children}</h1>
  ) : (
    <h2 className={` text-4xl ${themeClass} font-bold`}>{children}</h2>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
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
  size: PropTypes.oneOf(["l", "s"]).isRequired,
};

Title.defaultProps = {
  theme: "primary",
  size: "l",
};

export default Title;
