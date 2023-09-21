import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

const Headline = ({ children, variant, weight, alignment }) => {
  const weightClass = {
    regular: "font-regular",
    medium: "font-medium",
    bold: "font-bold",
  }[weight];

  const alignmentClass = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  }[alignment];

  const getClassname = (textClass) =>
    cn(weightClass, alignmentClass, textClass);

  const getProps = (textClass) => {
    return {
      className: getClassname(textClass),
      children,
    };
  };

  const variants = {
    h1: <text {...getProps("text-h1")} />,
    h2: <h2 {...getProps("text-h2")} />,
    h3: <h3 {...getProps("text-h3")} />,
    h4: <h4 {...getProps("text-h4")} />,
    h5: <h5 {...getProps("text-h5")} />,
    h6: <h6 {...getProps("text-h6")} />,
  };
  console.log(variants);
  return variants[variant] || null;
};

Headline.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "headline",
    "headline-r",
    "sub-headline",
    "sub-headline-r",
  ]).isRequired,
  weight: PropTypes.oneOf(["regular", "medium", "bold"]),
  alignment: PropTypes.oneOf(["left", "right", "center"]),
};

Headline.defaultProps = {
  weight: "bold",
  alignment: "left",
  className: "text-black",
};

export default Headline;
