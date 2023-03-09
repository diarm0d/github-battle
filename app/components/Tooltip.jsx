import React, { Component } from "react";
import propTypes from "prop-types";
import Hover from "./Hover";
import useHover from "../hooks/useHover";

const container = {
  position: "relative",
  display: "flex",
};

export default function Tooltip({ children, element }) {
  const [hovering, attrs] = useHover();
  return (
    <div style={container} {...attrs}>
      {hovering === true && element}
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  children: propTypes.node.isRequired,
  element: propTypes.node.isRequired,
};
